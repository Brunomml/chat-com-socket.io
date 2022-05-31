const socket = io()

socket.on("drawMensage", (text)=>{
    const div = document.querySelector(".mensage")

    div.innerText += `
        ${text}
    `
})

function sendMensage() {
    const inputText = document.querySelector(".inputText")
    socket.emit("mensage", `${inputText.value}`)
}