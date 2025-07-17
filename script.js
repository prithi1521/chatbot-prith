function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  // Append user message
  appendMessage("user", message);
  input.value = "";

  // Bot response after short delay
  setTimeout(() => {
    const botReply = getBotResponse(message);
    appendMessage("bot", botReply);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
}

function getBotResponse(msg) {
  const responses = [
    "Hello! How can I assist you?",
    "That's interesting!",
    "Can you please explain more?",
    "I'm a simple bot, but I try my best!",
    "Thanks for your message!",
    "Cool! 😎"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
