const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const socket = require("socket.io")(server)
const PORT = process.env.PORT

app.use(express.static("public"))

socket.on("connection", (stream)=>{
    stream.on("mensage", (text)=>{
        socket.emit("drawMensage", text)
    })
})

server.listen(PORT, ()=>{
    console.log(PORT);
})