import re
import random

def extract_filters(message):
    filters = {
        "job": "",
        "location": ""
    }

    message = message.lower()

    jobs = [
        "ai engineer",
        "machine learning engineer",
        "data scientist",
        "python developer",
        "software engineer",
        "frontend developer",
        "backend developer"
    ]

    locations = [
        "chennai",
        "bangalore",
        "hyderabad",
        "mumbai",
        "delhi",
        "pune"
    ]

    for job in jobs:
        if job in message:
            filters["job"] = job

    for location in locations:
        if location in message:
            filters["location"] = location

    return filters
    
def generate_otp():
    return str(random.randint(100000, 999999))