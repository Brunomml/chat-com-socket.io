const socket = io()

let nickName = prompt("digite seu nome:") || "unnamed";
nickName = mess_with_the_string(nickName)
let previous_author;

function drawMessage(text, message_author){
    const messagesEl = document.querySelector(".message")

    let element = ''
    let author = `<span style='color: #88f;'>${message_author}</span>`
    let message = `<div><div>${text}</div></div>`
    
    element = `<li>${message}</li>`
    if (message_author != previous_author) {
        element = `<li>${author} ${message}</li>`
    }
    
    messagesEl.innerHTML += element
    previous_author = message_author
}

function sendMensage() {
    const inputEl = document.querySelector("input.text")
    const text = mess_with_the_string(inputEl.value)
    if(text == '') return

    inputEl.value = ''
    socket.emit("messageClient", text, nickName)
}

function keyDown(event) {
    if (event.key == "Enter") sendMensage()
}


socket.on("messageServer", drawMessage)
addEventListener("keydown", keyDown)