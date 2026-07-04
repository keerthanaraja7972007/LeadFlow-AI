import google.generativeai as genai
import json

genai.configure(
    api_key="API_KEY"
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def chat_with_gemini(message):
    response = model.generate_content(message)
    return response.text

def extract_filters(message):

    prompt = f"""
Extract job title and location.

Message:
{message}

Return only JSON.

Example:

{{
    "job":"Machine Learning Engineer",
    "location":"Chennai"
}}
"""

    response = model.generate_content(prompt)

    # ADD THESE TWO LINES
    print("========== GEMINI RESPONSE ==========")
    print(response.text)

    text = response.text

    text = text.replace("```json", "")
    text = text.replace("```", "")

    return json.loads(text)
    
def generate_outreach_message(
    name,
    company,
    job_title
):

    prompt = f"""
    Write a professional sales outreach email.

    Prospect Name: {name}
    Company: {company}
    Job Title: {job_title}

    Product:
    LeadFlow AI - AI-powered lead generation and sales automation platform.

    Requirements:
    - Start with Hi {name}
    - Mention their company
    - Explain LeadFlow AI briefly
    - Ask for a short meeting
    - Keep under 120 words
    """

    response = model.generate_content(prompt)

    return response.text