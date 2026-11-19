::: {align="center"}
# ✨ LeadFlow AI

### Discover Better Leads. Create Smarter Outreach. Manage Campaigns.

**An AI-assisted lead generation and sales outreach platform**

Find prospects, explore lead insights, prepare personalized outreach,
and organize campaigns through one unified workspace.

`<br/>`{=html}

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Language-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
:::🌟 Overview
LeadFlow AI is a web-based platform built to simplify the prospect
discovery and sales outreach workflow. It brings lead search,
AI-assisted conversations, personalized message generation, and campaign
organization together in one application.

The platform combines a React frontend, a FastAPI backend,
PostgreSQL data storage through SQLAlchemy, and Google Gemini
for conversational assistance and outreach-message generation.
The idea: make it easier to move from discovering a potential
customer to preparing a relevant, personalized outreach message.

⚡ What You Can Do with LeadFlow AI
<table>
<tr>
<td width="50%">
🔎 Discover Leads
Search prospect records using job titles, company or person names, and
locations. Review contact details and lead scores.
</td>
<td width="50%">
🤖 Ask the AI Assistant
Use a conversational interface for lead-search requests,
outreach-related prompts, and general questions.
</td>
</tr>
<tr>
<td width="50%">
✉️ Prepare Personalized Outreach
Generate an AI-assisted message for a selected lead, then review, edit,
and copy the result.
</td>
<td width="50%">
📣 Organize Campaigns
Create and manage campaign records, search campaigns, view generated
messages, and export campaign information.
</td>
</tr>
</table>
🚀 Features
📊 Dashboard
- Overview interface with summary statistic cards.
- Lead-growth and conversion chart visualizations.
- Quick navigation to lead search, email generation, AI assistant, and
  campaigns.
<sub>{=html}Note: Dashboard summary figures and chart data are
currently demonstration values in the frontend.`</sub>`{=html}
🔍 Lead Search & Management
- Browse lead records stored in the backend database.
- Search by job title, company, person, and location.
- Filter backend search results by job title, location, and minimum
  lead score.
- View prospect details such as name, company, role, location, email,
  LinkedIn URL, and score.
- Classify leads using their stored score:
  Lead category            Score
  🔥 Hot            90 and above
⚡ Warm                 70--89
❄️ Cold               Below 70
- Save selected leads in browser local storage.
- Export filtered lead results as CSV.
🤖 AI Assistant
- Conversational chat interface powered by Google Gemini.
- Detects lead-search requests and extracts job-title/location
  filters.
- Retrieves matching lead records from the database.
- Handles outreach-related prompts.
- Uses Gemini for general conversational responses.
✉️ AI Email Generation
- Select a lead from available records.
- Generate a personalized outreach message using Google Gemini.
- Edit the generated message.
- Copy the message to the clipboard.
Implementation note: The /send-email endpoint currently logs the
supplied recipient, subject, and message in the backend console and
returns a response. It does not deliver an actual email yet.
📣 Campaign Management
- Create and store campaign records through the backend API.
- View and search campaigns by campaign name, company, or job title.
- View a campaign's generated message.
- Download campaign information as CSV.
- Delete campaign records.
🔐 Account & Authentication Interfaces
- User registration and login.
- Password hashing and login verification.
- Email OTP verification flow.
- JWT access-token generation.
- Forgot-password and OTP-based password-reset flow.
- Settings interface for profile and application preferences.
🧰 Tech Stack
  Layer                      Technologies
  Frontend                   React, JavaScript, Vite
Styling & UI               Tailwind CSS, Framer Motion, Lucide React
Charts                     Recharts
Routing                    React Router
HTTP Client                Axios
Backend                    Python, FastAPI
Database ORM               SQLAlchemy
Database                   PostgreSQL
AI Integration             Google Gemini (gemini-2.5-flash)
Authentication Utilities   Passlib, JWT (python-jose)
Email Utility              Python SMTP, python-dotenv
Data Handling              CSV, Pandas
🏗️ Project Structure
LeadFlow-AI/
│
├── backend/
│   ├── main.py                  # FastAPI application and API routes
│   ├── database.py              # SQLAlchemy engine and DB session
│   ├── models.py                # Database models
│   ├── schemas1.py              # Request schemas
│   ├── auth.py                  # Password hashing and verification
│   ├── jwt_handler.py           # JWT access-token creation
│   ├── gemini_service.py        # Gemini chat, filters and email generation
│   ├── intent.py                # Chat intent detection
│   ├── intent_service.py        # Additional intent detection logic
│   ├── filter_service.py        # Job/location filter extraction
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
│       │   └── api.js           # Backend API client
│       ├── App.jsx              # Frontend routes
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── package.json
└── README.md
⚙️ Getting Started
Follow these steps to run LeadFlow AI locally.
Prerequisites
Make sure you have the following installed:
- Node.js and npm
- Python (Python 3.10+ recommended)
- PostgreSQL
- A Google Gemini API key
1. Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd LeadFlow-AI
Replace <YOUR_GITHUB_REPOSITORY_URL> with your repository URL.
2. Configure PostgreSQL
Create a PostgreSQL database named leadflow_ai.

The current database connection is configured in backend/database.py.
Update the connection details to match your local PostgreSQL username,
password, host, port, and database.
3. Configure environment variables and credentials
Before running or publishing the application:
- Move the Gemini API key out of backend/gemini_service.py and load
  it from an environment variable.
- Move the database connection string out of backend/database.py and
  load it from an environment variable.
- The email utility reads EMAIL_ADDRESS and EMAIL_PASSWORD from
  backend/.env.
Example configuration:
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=postgresql://username:password@localhost:5432/leadflow_ai
EMAIL_ADDRESS=your_email_address
EMAIL_PASSWORD=your_email_app_password
Create backend/.env for the email settings. Update gemini_service.py
and database.py to read GEMINI_API_KEY and DATABASE_URL from the
environment before relying on those variables.
Security: Never commit .env files, API keys, database passwords,
JWT secrets, or email credentials. Rotate any credentials that may
already have been exposed or committed.

4. Set up and run the backend
Open a terminal:
cd backend
python -m venv venv
Activate the virtual environment.

Windows PowerShell
.\venv\Scripts\Activate.ps1
macOS / Linux
source venv/bin/activate
Install the principal backend dependencies:
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic python-dotenv google-generativeai "passlib[bcrypt]" "python-jose[cryptography]" pandas
Start the API server from the backend directory:
uvicorn main:app --reload --port 8000
Backend base URL: http://127.0.0.1:8000

Interactive API documentation: http://127.0.0.1:8000/docs
The supplied backend/requirements.txt should be reviewed and updated
to include all packages imported by the backend.

5. Set up and run the frontend
Open a second terminal:
cd frontend
npm install
npm run dev
Open the local URL printed by Vite. The current frontend API client
expects the backend at http://127.0.0.1:8000.
🔌 Backend API
The following routes are defined in the current FastAPI application.
  Method                  Endpoint                     Purpose
  GET                   /                          Backend health/message

  POST                  /register                  Register a user and
initiate OTP
verification

  POST                  /verify-otp                Verify a user's email
OTP

  POST                  /login                     Authenticate a user and
issue a JWT

  POST                  /search-leads              Search CSV lead data by
skill

  GET                   /leads                     Retrieve lead records

  GET                   /search                    Search database leads
by job, location, and
minimum score

  POST                  /generate-message          Generate an AI outreach
message and save a
campaign record

  POST                  /chat                      Process chatbot
requests

  GET                   /campaigns                 Retrieve campaigns

  POST                  /campaigns                 Create a campaign

  DELETE                /campaigns/{campaign_id}   Delete a campaign

  POST                  /send-email                Accept email details;
currently logs them
rather than delivering
email

  POST                  /forgot-password           Initiate password-reset
OTP
POST                  /reset-password            Reset password using
OTP
🔄 Application Workflow
```mermaid
flowchart TD
    A["LeadFlow AI Dashboard"] --> B["Lead Search"]
    A --> C["AI Assistant"]
    A --> D["Campaign Management"]
    A --> E["AI Email Generation"]

    B --> F["FastAPI Backend"]
    C --> F
    D --> F
    E --> F

    F --> G[("PostgreSQL Database")]
    F --> H["Google Gemini"]
    F --> I["OTP / Email Utility"]
```
🔒 Security & Project Status
LeadFlow AI is currently a development project. Before production
deployment, review and strengthen the following:
- Store API keys, database credentials, JWT signing secrets, and email
  credentials securely in environment variables or a secrets manager.
- Rotate credentials that have previously been committed or shared.
- Add and verify authentication and authorization on protected API
  routes.
- Configure CORS for the intended deployment origins.
- Add rate limiting and strengthen OTP handling.
- Implement and test actual email delivery before describing the email
  workflow as automated.
- Replace demonstration dashboard figures with values calculated from
  real application data.
- Validate inputs and test backend endpoints before deployment.
🎯 Project Goal
LeadFlow AI aims to bring prospect discovery, AI-assisted
communication, and campaign organization into one streamlined
workflow---helping users spend less time on repetitive sales tasks and
more time building meaningful customer relationships.
::: {align="center"}

------------------------------------------------------------------------

### Built to make lead generation and outreach more organized with AI.

**LeadFlow AI --- Find. Connect. Convert.** ✨
:::
