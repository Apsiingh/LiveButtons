const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

let buttonState = { A: true, B: true, C: true };

io.on("connection", function (socket) {
  console.log("User Connected");

  socket.emit("btnState", buttonState);

  socket.on("activate", function () {
    buttonState = { A: true, B: true, C: true };
    io.emit("activate");
  });

  socket.on("buttonClick", function (buttonId) {
    buttonState[buttonId] = false;
    io.emit("buttonClick", buttonId);
  });

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`Server is lisening on the port ${port}`);
});
