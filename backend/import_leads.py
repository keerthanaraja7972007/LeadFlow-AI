import pandas as pd

from database import SessionLocal
from models import Lead

# Check model columns
print("TABLE:", Lead.__table__)
for c in Lead.__table__.columns:
    print(c.name, c.type)

db = SessionLocal()

df = pd.read_csv("leads.csv")

print(df.columns.tolist())
print(df.head())

for _, row in df.iterrows():

    lead = Lead(
        full_name=str(row["full_name"]),
        company_name=str(row["company_name"]),
        job_title=str(row["job_title"]),
        location=str(row["location"]),
        email=None if pd.isna(row["email"]) else str(row["email"]),
        linkedin_url=str(row["linkedin_url"]),
        score=float(row["score"])
    )

    db.add(lead)

try:
    db.commit()
    print("Leads Imported Successfully")
except Exception as e:
    db.rollback()
    print("ERROR:", e)

db.close()