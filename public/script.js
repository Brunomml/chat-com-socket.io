const socket = io()

socket.on("drawMensage", (text)=>{
    const div = document.querySelector(".mensage")

    div.innerHTML += `
    <p>
        ${text}
    <p>
    `
})

function sendMensage() {
    const inputText = document.querySelector(".inputText")
    socket.emit("mensage", `${inputText.value}`)
}