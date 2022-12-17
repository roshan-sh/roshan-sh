const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 4000;
const router = require("./router");
const app = express();
const cors = require("cors");

const server = http.createServer(app);
const io = socketio(server);
app.use(router); // router to server for connection
app.use(cors());

//using socket io connection for live response
io.on("connection", (socket) => {
    console.log("we have a new connection");
    socket.on("disconnect", () => {
        console.log("user had left the chat.");
    });
});

server.listen(PORT, () => console.log(`server is runnig on PORT ${PORT}`));