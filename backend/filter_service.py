def extract_filters(message):

    message = message.lower()

    filters = {

        "job": None,

        "location": None

    }

    jobs = [

        "software engineer",
        "data scientist",
        "ai engineer",
        "machine learning engineer",
        "doctor",
        "teacher",
        "professor",
        "lawyer",
        "architect",
        "designer",
        "manager",
        "ceo",
        "founder",
        "developer",
        "student"

    ]

    locations = [

        "chennai",
        "bangalore",
        "hyderabad",
        "mumbai",
        "delhi",
        "pune",
        "coimbatore",
        "trichy"

    ]

    for job in jobs:

        if job in message:

            filters["job"] = job

            break

    for city in locations:

        if city in message:

            filters["location"] = city.title()

            break

    return filters