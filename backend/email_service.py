import os
import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("EMAIL_ADDRESS")
PASSWORD = os.getenv("EMAIL_PASSWORD")

print("EMAIL:", EMAIL)
print("PASSWORD:", PASSWORD)


def send_email(receiver_email, subject, body):

    try:

        message = MIMEMultipart()

        message["From"] = EMAIL
        message["To"] = receiver_email
        message["Subject"] = subject

        message.attach(
            MIMEText(body, "plain")
        )

        server = smtplib.SMTP(
            "smtp.gmail.com",
            587
        )

        server.starttls()

        server.login(
            EMAIL,
            PASSWORD
        )

        server.sendmail(
            EMAIL,
            receiver_email,
            message.as_string()
        )

        server.quit()

        print("Email sent successfully!")

        return True

    except Exception as e:
        print("Email Error:", e)
        return False