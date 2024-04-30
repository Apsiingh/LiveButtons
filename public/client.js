const activateBtn = document.getElementById("activateBtn");
const buttons = document.querySelectorAll("#buttons button");

let socket = io();

activateBtn.addEventListener("click", () => {
  socket.emit("activate");
});

// catching event to display all the Butttons
socket.on("activate", () => {
  activateBtn.disabled = true;
  document.getElementById("buttons").style.display = "block";
  document.getElementById("buttons").style.display = "flex";
});

// appling click event to all the Buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("inactive")) {
      button.classList.add("inactive");
      socket.emit("buttonClick", button.id);
    }
  });
});

// catching the event to inactive the clickButton
socket.on("buttonClick", (buttonId) => {
  document.getElementById(buttonId).classList.add("inactive");
  // const button = document.getElementById(buttonId);
  // if (button) {
  //   button.classList.add("inactive");
  // }
});

// catching the event for maintaining the state in all the tab and Windows
socket.on("btnState", function (buttonState) {
  for (let buttonId in buttonState) {
    const button = document.getElementById(buttonId);
    if (buttonState[buttonId] === false) {
      button.classList.add("inactive");
    }
  }
});
