from database import engine
from sqlalchemy import text

with engine.connect() as conn:

    conn.execute(
        text("DROP TABLE IF EXISTS leads")
    )

    conn.commit()

print("Leads table deleted successfully")