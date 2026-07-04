import csv

from database import SessionLocal
from models import Lead

db = SessionLocal()

with open("leads.csv", mode="r", encoding="utf-8") as file:

    reader = csv.DictReader(file)

    count = 0

    for row in reader:

        lead = Lead(

            full_name=row["full_name"],

            company_name=row["company_name"],

            job_title=row["job_title"],

            location=row["location"],

            email=row["email"],

            linkedin_url=row["linkedin_url"],

            score=float(row["score"])

        )

        db.add(lead)

        count += 1

db.commit()

db.close()

print(f"{count} leads imported successfully!")