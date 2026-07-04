def detect_intent(message):

    message = message.lower()

    # Lead Search
    if any(word in message for word in [
        "find",
        "search",
        "show",
        "lead",
        "engineer",
        "developer",
        "scientist",
        "manager",
        "analyst",
        "chennai",
        "bangalore",
        "hyderabad",
        "mumbai"
    ]):
        return "lead_search"

    # Email generation
    if any(word in message for word in [
        "email",
        "message",
        "outreach",
        "write",
        "mail"
    ]):
        return "email"

    # Everything else
    return "chat"