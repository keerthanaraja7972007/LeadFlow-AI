def detect_intent(message):

    message = message.lower()

    lead_keywords = [

        "find",
        "show",
        "search",
        "need",
        "looking",
        "engineer",
        "developer",
        "doctor",
        "teacher",
        "professor",
        "lawyer",
        "student",
        "ceo",
        "founder",
        "manager",
        "designer",
        "architect",
        "scientist",
        "analyst",
        "officer",
        "referral",
        "employee",
        "company"

    ]

    for word in lead_keywords:

        if word in message:

            return "lead_search"

    return "general_chat"