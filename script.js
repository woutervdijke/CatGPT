// Javascript code
const userInput = document.getElementById("user-input");
const chatArea = document.getElementById("chat-area");
const sendBtn = document.querySelector(".fa-paper-plane");

sendBtn.addEventListener("click", function() {
    if(userInput.value !== "") {
        let newBubble = document.createElement("div");
        newBubble.classList.add("chat-bubble", "user-bubble");
        newBubble.innerHTML = `<p>${userInput.value}</p>`;
        chatArea.appendChild(newBubble);
        userInput.value = "";
        let newBubble2 = document.createElement("div");
        newBubble2.classList.add("chat-bubble", "chat-bubble-cat");
        newBubble2.innerHTML = `<p>Meow, How can I help you?</p>`;
        chatArea.appendChild(newBubble2);
    }
});
