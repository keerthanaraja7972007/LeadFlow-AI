from email_service import send_email

success = send_email(
    receiver_email="keerthanar.cse2025@citchennai.net",
    subject="LeadFlow AI Test",
    body="Hello! This is a test email from LeadFlow AI."
)

print(success)