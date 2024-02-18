import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (_, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat", (receiverId, message) => {
    console.log("receiverId ===>", receiverId);
    console.log("message received ===>", message);
    socket.to(receiverId).emit("chat", socket.id, message);
  });
});

server.listen(3000, () => {
  console.log(__dirname);
  console.log("listening on *:3000");
});
