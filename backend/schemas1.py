from pydantic import BaseModel

class CampaignRequest(BaseModel):
    name: str
    company: str
    job_title: str

class ChatRequest(BaseModel):
    message: str
class CampaignRequest(BaseModel):
    name: str
    job_title: str
    message: str
    total_leads: int
class UserRegister(BaseModel):
    name: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class LeadSearch(BaseModel):
    skill: str

class MessageRequest(BaseModel):
    name: str
    company: str
    job_title: str

class EmailRequest(BaseModel):

    to: str
    subject: str
    message: str

class OTPVerification(BaseModel):
    email: str
    otp: str

class ForgotPasswordRequest(BaseModel):
    email: str


class ResetPasswordRequest(BaseModel):
    email: str
    otp: str
    password: str