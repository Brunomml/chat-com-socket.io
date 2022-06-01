const socket = io()

socket.on("drawMensage", (text)=>{
    const div = document.querySelector(".mensage")

    div.innerText += `${text}`
    div.innerHTML += "<br/>"
})

function sendMensage() {
    const inputText = document.querySelector(".text")
    socket.emit("mensage", `${inputText.value}`)
}
addEventListener("keydown", (event)=>{
    if (event.key == "Enter") {
        sendMensage()
    }
})