const socket = io()

let author = prompt("digite seu nome:") || "unnamed";
author = mess_with_the_string(author)


function drawMessage(text, author){
    const messagesEl = document.querySelector(".message")
    messagesEl.innerHTML += `<li><div><span style="color: #88f;">${author}</span><div>${text}</div></div></li>`
}

function sendMensage() {
    const inputEl = document.querySelector("input.text")
    const text = mess_with_the_string(inputEl.value)
    if(text == '') return

    inputEl.value = ''
    socket.emit("messageClient", text, author)
}

function keyDown(event) {
    if (event.key == "Enter") sendMensage()
}


socket.on("messageServer", drawMessage)
addEventListener("keydown", keyDown)