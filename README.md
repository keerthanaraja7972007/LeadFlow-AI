
<div align="center">

# ✨ LeadFlow AI

### Discover Better Leads. Create Smarter Outreach. Manage Campaigns.

**An AI-Assisted Lead Generation & Sales Outreach Platform**

Find prospects, explore lead insights, generate personalized outreach messages, and organize campaigns — all in one unified workspace.

<br/>

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Language-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

</div>

---

## 🌟 Overview

**LeadFlow AI** is a web-based platform designed to simplify the prospect discovery and sales outreach process.

It brings lead search, AI-powered conversations, personalized message generation, and campaign management together in a single application.

The platform combines a modern **React frontend**, a **FastAPI backend**, **PostgreSQL** database integration through SQLAlchemy, and **Google Gemini AI** for conversational assistance and personalized outreach generation.

The goal is simple: help users move from discovering potential customers to preparing relevant, personalized outreach more efficiently.

---

## ⚡ What Can You Do with LeadFlow AI?

| Feature | Description |
|---|---|
| 🔎 Lead Discovery | Search and explore prospects using job titles, company names, person names, and locations. |
| 🤖 AI Assistant | Interact with an AI-powered chatbot for lead-search requests and general assistance. |
| ✉️ AI Message Generation | Generate personalized outreach messages based on selected lead information. |
| 📣 Campaign Management | Create, view, search, and manage campaign records. |
| 📊 Dashboard | Explore dashboard statistics and visual representations of campaign and lead information. |
| 🔐 Authentication | Access registration, login, OTP verification, and password recovery interfaces. |

---

## 🚀 Key Features

### 📊 1. Interactive Dashboard
- Overview of lead and campaign statistics.
- Lead-growth and conversion chart visualizations.
- Quick navigation to important application modules.
- Organized dashboard interface for accessing key features.

### 🔍 2. Lead Search & Management
- Browse lead records stored in the backend database.
- Search prospects by:
  - Job title
  - Company name
  - Person name
  - Location
- Filter backend search results using job title, location, and minimum lead score.
- View prospect details, including name, company, role, location, email, LinkedIn URL, and score.
- Categorize prospects based on their lead scores.

**Lead Classification**

| Category | Score |
|---|---:|
| 🔥 Hot Lead | 90 and above |
| ⚡ Warm Lead | 70–89 |
| ❄️ Cold Lead | Below 70 |

- Save selected leads in browser local storage.
- Export filtered lead results as CSV files.

### 🤖 3. AI-Powered Assistant
- Conversational interface powered by Google Gemini.
- Understands lead-search requests through intent detection.
- Extracts job-title and location filters from user queries.
- Retrieves matching lead records from the database.
- Handles outreach-related prompts.
- Generates conversational responses for general questions.

### ✉️ 4. AI-Powered Email Generation
- Select a prospect from available lead records.
- Generate personalized outreach messages using Google Gemini.
- Review and edit generated messages.
- Copy generated content for further use.

### 📣 5. Campaign Management
- Create and store campaign records.
- View and search existing campaigns.
- Search campaigns using campaign name, company, or job title.
- View generated campaign messages.
- Download campaign information as CSV.
- Delete campaign records.

### 🔐 6. Authentication & Account Management
- User registration and login.
- Password hashing and verification.
- Email OTP verification workflow.
- JWT access-token generation.
- Forgot-password functionality.
- OTP-based password-reset workflow.
- Settings interface for profile and application preferences.

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, JavaScript, Vite |
| Styling | Tailwind CSS 4 |
| UI & Animations | Framer Motion, Lucide React |
| Charts | Recharts |
| Routing | React Router |
| HTTP Client | Axios |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| AI Integration | Google Gemini (`gemini-2.5-flash`) |
| Authentication | Passlib, JWT (`python-jose`) |
| Email Utility | Python SMTP, python-dotenv |
| Data Processing | CSV, Pandas |

---

## 🏗️ Project Structure

```text
LeadFlow-AI/
│
├── backend/
│   ├── main.py                  # FastAPI application and API routes
│   ├── database.py              # Database connection and sessions
│   ├── models.py                # SQLAlchemy database models
│   ├── schemas1.py              # Request and response schemas
│   ├── auth.py                  # Password hashing and verification
│   ├── jwt_handler.py           # JWT token generation
│   ├── gemini_service.py        # Gemini AI integration
│   ├── intent.py                # Chat intent detection
│   ├── intent_service.py        # Additional intent logic
│   ├── filter_service.py        # Job and location filter extraction
│   ├── csv_service.py           # CSV-based lead search
│   ├── email_service.py         # SMTP email utility
│   ├── utils.py                 # OTP and helper functions
│   ├── leads.csv                # Sample lead dataset
│   └── requirements.txt         # Backend dependencies
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/          # Reusable UI components
│       ├── pages/               # Application pages
│       ├── services/
│       │   └── api.js           # Backend API integration
│       ├── App.jsx              # Application routes
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Follow these instructions to run LeadFlow AI locally.

### 📌 Prerequisites

Make sure you have installed:

- Node.js and npm
- Python 3.10+
- PostgreSQL
- Google Gemini API key

### 1️⃣ Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>

cd LeadFlow-AI
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2️⃣ Configure PostgreSQL

Create a PostgreSQL database named:

```sql
CREATE DATABASE leadflow_ai;
```

The current database connection is configured in:

```text
backend/database.py
```

Update the database connection details according to your local PostgreSQL configuration.

### 3️⃣ Configure Environment Variables

Before running the application, configure your credentials securely.

Example environment configuration:

```env
GEMINI_API_KEY=your_gemini_api_key

DATABASE_URL=postgresql://username:password@localhost:5432/leadflow_ai

EMAIL_ADDRESS=your_email_address

EMAIL_PASSWORD=your_email_app_password
```

**Important configuration notes:**

- Move the Gemini API key from `gemini_service.py` into an environment variable.
- Configure `database.py` to read the database URL from the environment.
- The email utility reads `EMAIL_ADDRESS` and `EMAIL_PASSWORD` from `backend/.env`.
- Update the backend code to load the Gemini and database environment variables before relying on this configuration.

⚠️ **Security:** Never commit API keys, database passwords, JWT secrets, or `.env` files to GitHub. Rotate any credentials that may already have been exposed.

### 4️⃣ Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the environment.

**Windows PowerShell:**

```bash
.\venv\Scripts\Activate.ps1
```

**macOS / Linux:**

```bash
source venv/bin/activate
```

Install the principal backend dependencies:

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic python-dotenv google-generativeai "passlib[bcrypt]" "python-jose[cryptography]" pandas
```

Start the FastAPI server:

```bash
uvicorn main:app --reload --port 8000
```

Backend URL:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

### 5️⃣ Run the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

The frontend API client currently expects the backend at:

```text
http://127.0.0.1:8000
```

---

## 🔌 Backend API Endpoints

The following endpoints are defined in the current FastAPI application.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend health/message |
| POST | `/register` | Register a user and initiate OTP verification |
| POST | `/verify-otp` | Verify email OTP |
| POST | `/login` | Authenticate user and issue JWT |
| POST | `/search-leads` | Search CSV lead data |
| GET | `/leads` | Retrieve lead records |
| GET | `/search` | Search database leads using filters |
| POST | `/generate-message` | Generate AI outreach message and save campaign |
| POST | `/chat` | Process chatbot requests |
| GET | `/campaigns` | Retrieve campaigns |
| POST | `/campaigns` | Create a campaign |
| DELETE | `/campaigns/{campaign_id}` | Delete a campaign |
| POST | `/send-email` | Accept email details; currently logs them |
| POST | `/forgot-password` | Initiate password-reset OTP |
| POST | `/reset-password` | Reset password using OTP |

---

## 🔄 Application Workflow

```mermaid
flowchart TD
    A["LeadFlow AI Dashboard"]

    A --> B["Lead Search"]
    A --> C["AI Assistant"]
    A --> D["Campaign Management"]
    A --> E["AI Message Generation"]

    B --> F["FastAPI Backend"]
    C --> F
    D --> F
    E --> F

    F --> G[("PostgreSQL Database")]
    F --> H["Google Gemini AI"]
    F --> I["OTP / Email Utility"]
```

---

## 🔒 Security & Implementation Notes

LeadFlow AI is currently a development project. Some features require further implementation and testing before production deployment.

- Secure API keys, database credentials, JWT secrets, and email credentials using environment variables or a secrets manager.
- Add and verify authentication and authorization on protected API routes.
- Configure CORS for the intended deployment environment.
- Add rate limiting and strengthen OTP handling.
- Implement and test actual email delivery before enabling automated outreach.
- Replace demonstration dashboard statistics with values calculated from real application data.
- Validate inputs and thoroughly test backend endpoints.
- Review `requirements.txt` to ensure all imported backend dependencies are included.

**Current implementation notes:**
- Dashboard statistics and chart data are demonstration values.
- Selected leads are saved in browser local storage.
- The `/send-email` endpoint currently logs the recipient, subject, and message in the backend console instead of delivering an actual email.
- Gemini and database environment-variable configuration requires the code updates described above.

---

## 🎯 Project Goal

LeadFlow AI aims to bring prospect discovery, AI-assisted communication, and campaign organization into one streamlined workflow.

By combining intelligent assistance with organized lead management, the platform aims to reduce repetitive sales tasks and help users focus on building meaningful customer relationships.

---

<div align="center">

## ✨ LeadFlow AI

### Find. Connect. Convert.

**Built to make lead generation and outreach more organized with AI.**

</div>
