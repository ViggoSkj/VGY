function ChatVgy() {
    const chatWindow = document.getElementById("chat-vgy")
    const chatMessageContainer = document.getElementById("chat-messages")
    const sendMessageButton = document.getElementById("vgy-send")
    const sendTextElement = document.getElementById("vgy-send-text")

    const addChatMessage = (message, you=false) => {
        const newMessage = document.createElement("p")
        newMessage.innerText = message
        if (you) {
            newMessage.setAttribute("data-you", "")
        }
        chatMessageContainer.appendChild(newMessage)
    }

    const init = () => {
        sendMessageButton.addEventListener("click", () => {
            addChatMessage(sendTextElement.value, true)
            sendTextElement.value = ""
        })
    }

    return {
        addChatMessage,
        init,
    }
}