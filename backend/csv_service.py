import csv

def search_employees(skill):

    results = []

    skill = skill.lower()

    with open("leads.csv", mode="r", encoding="utf-8") as file:

        reader = csv.DictReader(file)

        for row in reader:

            if (
                skill in row["job_title"].lower()
                or skill in row["company_name"].lower()
                or skill in row["location"].lower()
            ):

                results.append(row)

    return results