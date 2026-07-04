from fastapi import FastAPI, Depends
from schemas1 import ForgotPasswordRequest, ResetPasswordRequest
from datetime import datetime, timedelta
from utils import generate_otp
from email_service import send_email
from schemas1 import OTPVerification
from sqlalchemy.orm import Session
from email_service import send_email
from datetime import datetime, timedelta
from schemas1 import EmailRequest
from database import SessionLocal, engine
from schemas1 import MessageRequest
from models import Base, User, Lead
from schemas1 import CampaignRequest
from gemini_service import generate_outreach_message
from schemas1 import UserRegister, UserLogin
from fastapi import Depends
from sqlalchemy.orm import Session
from filter_service import extract_filters
from models import Lead
from intent_service import detect_intent
from fastapi.middleware.cors import CORSMiddleware
from models import (
    Base,
    User,
    Lead,
    Campaign
)
from intent import detect_intent
from fastapi import HTTPException

from gemini_service import (
    chat_with_gemini,
    extract_filters,
    generate_outreach_message
)
from fastapi import Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Lead
from schemas1 import ChatRequest
from gemini_service import chat_with_gemini
from utils import extract_filters, generate_otp   # wherever your function is located

from auth import hash_password, verify_password
from jose import jwt
from jwt_handler import create_access_token
from schemas1 import LeadSearch
from csv_service import search_employees
from schemas1 import ChatRequest
from gemini_service import extract_filters
from fastapi.security import OAuth2PasswordBearer
from models import ChatRequest

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login"
)

app = FastAPI()
app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)
Base.metadata.create_all(bind=engine)
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()
@app.post("/register")
def register_user(
    user: UserRegister,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    otp = generate_otp()

    expiry = datetime.now() + timedelta(minutes=5)

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),

        is_verified=False,
        otp=otp,
        otp_expiry=expiry
    )

    db.add(new_user)
    db.commit()

    send_email(
        user.email,
        "LeadFlow AI Verification",
        f"Your OTP is: {otp}\n\nValid for 5 minutes."
    )

    return {
        "message": "OTP sent successfully"
    }

@app.post("/verify-otp")
def verify_otp(
    data: OTPVerification,
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(User.email == data.email)
        .first()
    )

    if not user:
        return {
            "message": "User not found"
        }

    if user.otp != data.otp:
        return {
            "message": "Invalid OTP"
        }

    if datetime.now() > user.otp_expiry:
        return {
            "message": "OTP expired"
        }

    user.is_verified = True
    user.otp = None
    user.otp_expiry = None

    db.commit()

    return {
        "message": "Email verified successfully"
    }
    
@app.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User Not Found"
        )

    if not verify_password(
        user.password,
        existing_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    if not existing_user.is_verified:
        raise HTTPException(
            status_code=401,
            detail="Please verify your email first."
        )

    token = create_access_token(
        {
            "sub": existing_user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }

@app.post("/search-leads")
def search_leads(data: LeadSearch):

    results = search_employees(data.skill)

    return results

@app.get("/leads")
def get_all_leads(
    db: Session = Depends(get_db)
):
    leads = db.query(Lead).all()
    return leads


@app.get("/search")
def search_database_leads(
    job: str = None,
    location: str = None,
    min_score: float = None,
    db: Session = Depends(get_db)
):

    query = db.query(Lead)

    if job:
        query = query.filter(
            Lead.job_title.ilike(f"%{job}%")
        )

    if location:
        query = query.filter(
            Lead.location.ilike(f"%{location}%")
        )

    if min_score:
        query = query.filter(
            Lead.score >= min_score
        )

    results = query.all()

    return results
@app.get("/")
def home():
    return {
        "message": "LeadFlow AI Backend Running"
    }
@app.get("/")

@app.post("/generate-message")
def generate_message(
    data: MessageRequest,
    db: Session = Depends(get_db)
):

    message = generate_outreach_message(
        data.name,
        data.company,
        data.job_title
    )

    campaign = Campaign(
        name=data.name,
        company=data.company,
        job_title=data.job_title,
        message=message
    )

    db.add(campaign)
    db.commit()
    db.refresh(campaign)

    return {
        "campaign_id": campaign.id,
        "campaign_name": campaign.name,
        "generated_message": campaign.message
    }


# =====================================
# AI CHATBOT
# =====================================

@app.post("/chat")
def chat(
    data: ChatRequest,
    db: Session = Depends(get_db)
):

    intent = detect_intent(data.message)

    if intent == "lead_search":

        print("Lead Search Detected")
        print(data.message)

        filters = extract_filters(data.message)

        query = db.query(Lead)

        if filters.get("job"):
            query = query.filter(
                Lead.job_title.ilike(f"%{filters['job']}%")
            )

        if filters.get("location"):
            query = query.filter(
                Lead.location.ilike(f"%{filters['location']}%")
            )

        leads = query.all()

        results = []

        for lead in leads:

            if lead.score >= 90:
                status = "Hot"

            elif lead.score >= 70:
                status = "Warm"

            else:
                status = "Cold"

            results.append({
                "name": lead.full_name,
                "company": lead.company_name,
                "job_title": lead.job_title,
                "location": lead.location,
                "email": lead.email,
                "linkedin_url": lead.linkedin_url,
                "score": lead.score,
                "status": status
            })

        print("Filters:", filters)
        print("Results:", results)

        return {
            "type": "lead_search",
            "results": results
        }

    elif intent == "email":

        lead = db.query(Lead).first()

        if not lead:
            return {
                "type": "email",
                "response": "No leads found."
            }

        email = generate_outreach_message(
            lead.full_name,
            lead.company_name,
            lead.job_title
        )

        return {
            "type": "email",
            "response": email
        }

    else:

        reply = chat_with_gemini(data.message)

        return {
            "type": "chat",
            "response": reply
        }


# =====================================
# CAMPAIGNS
# =====================================

@app.get("/campaigns")
def get_campaigns(db: Session = Depends(get_db)):
    return db.query(Campaign).all()


@app.post("/campaigns")
def create_campaign(
    data: CampaignRequest,
    db: Session = Depends(get_db)
):

    campaign = Campaign(
        name=data.name,
        job_title=data.job_title,
        message=data.message,
        total_leads=data.total_leads,
        status="Draft"
    )

    db.add(campaign)
    db.commit()
    db.refresh(campaign)

    return {
        "message": "Campaign Created Successfully",
        "campaign": campaign.id
    }


@app.delete("/campaigns/{campaign_id}")
def delete_campaign(
    campaign_id: int,
    db: Session = Depends(get_db)
):

    campaign = db.query(Campaign).filter(
        Campaign.id == campaign_id
    ).first()

    if not campaign:
        return {
            "message": "Campaign not found"
        }

    db.delete(campaign)
    db.commit()

    return {
        "message": "Campaign deleted successfully"
    }


# =====================================
# SEND EMAIL
# =====================================

@app.post("/send-email")
def send_email_api(data: EmailRequest):

    print("========== EMAIL ==========")
    print("To:", data.to)
    print("Subject:", data.subject)
    print(data.message)
    print("===========================")

    return {
        "message": "Email sent successfully."
    }


# =====================================
# FORGOT PASSWORD
# =====================================

@app.post("/forgot-password")
def forgot_password(
    data: ForgotPasswordRequest,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        return {
            "message": "Email not found"
        }

    otp = generate_otp()

    user.otp = otp
    user.otp_expiry = datetime.now() + timedelta(minutes=5)

    db.commit()

    send_email(
        user.email,
        "LeadFlow AI Password Reset",
        f"Your OTP is: {otp}\n\nThis OTP expires in 5 minutes."
    )

    return {
        "message": "OTP sent successfully"
    }


@app.post("/reset-password")
def reset_password(
    data: ResetPasswordRequest,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        return {
            "message": "User not found"
        }

    if user.otp != data.otp:
        return {
            "message": "Invalid OTP"
        }

    if datetime.now() > user.otp_expiry:
        return {
            "message": "OTP expired"
        }

    user.password = hash_password(data.password)

    user.otp = None
    user.otp_expiry = None

    db.commit()

    return {
        "message": "Password updated successfully"
    }