const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const socket = require("socket.io")(server)
const PORT = process.env.PORT || 3000


app.use(express.static("public"))

function connection(stream) {
    // enviar mensagem
    function sendMessage(text, author) {
        socket.emit("messageServer", text, author)
    }

    //receber mensagem
    stream.on("messageClient", sendMessage)
}

socket.on("connection", connection)
server.listen(PORT, () => console.log(PORT))