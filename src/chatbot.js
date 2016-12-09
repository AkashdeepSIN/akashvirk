function chatbot(message) {
    if (typeof message === 'undefined') {
        return 'Hello.'
    }
    var lowerMessage = message.toLowerCase()

        if (lowerMessage == "how are you") {
            return "good"
        }
        if (/thank/i.test(message)) {
        return "your welcome"
    }

    return "Sorry, I don't understand."
}

module.exports = chatbot
