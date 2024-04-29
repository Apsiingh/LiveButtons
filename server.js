const express = require("express");
const http = require("http");
const { emit } = require("process");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", function (socket) {
  socket.on("activate", function () {
    io.emit("activate");
  });

  socket.on("buttonClick", function (buttonId) {
    io.emit("buttonClick", buttonId);
  });
});

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`Server is lisening on the port ${port}`);
});
