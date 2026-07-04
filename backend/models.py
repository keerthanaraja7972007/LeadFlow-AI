from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import Boolean, DateTime
from pydantic import BaseModel

from sqlalchemy import Column, Integer, String, Text
from database import Base
from sqlalchemy import (
    Column,
    Integer,
    String,
    Float
)

from sqlalchemy import Boolean, DateTime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    email = Column(String, unique=True)

    password = Column(String)

    is_verified = Column(Boolean, default=False)

    otp = Column(String, nullable=True)

    otp_expiry = Column(DateTime, nullable=True)    


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True)

    full_name = Column(String)

    company_name = Column(String)

    job_title = Column(String)

    location = Column(String)

    email = Column(String)

    linkedin_url = Column(String)

    score = Column(Float)



class Response(Base):
    __tablename__ = "responses"

    id = Column(Integer, primary_key=True)

    lead_id = Column(Integer)

    reply_text = Column(String)

    category = Column(String)


class Analytics(Base):
    __tablename__ = "analytics"

    id = Column(Integer, primary_key=True)

    total_leads = Column(Integer)

    messages_sent = Column(Integer)

    responses = Column(Integer)

    conversion_rate = Column(Float)


class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    company = Column(String)

    job_title = Column(String)

    message = Column(String)
    
class ChatRequest(BaseModel):
    message: str