const buttons = document.querySelectorAll(".color");
const bottom = document.querySelector(".bottom-component");

console.log(buttons);
console.log(bottom);

const blue = buttons[0];
const green = buttons[1];
const red = buttons[2];
const yellow = buttons[3];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Reset all buttons
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    const colorId = e.target.id;

    if (colorId === "blue") {
      bottom.style.backgroundColor = "cornflowerblue";
      e.target.style.backgroundColor = "cornflowerblue";
      e.target.style.color = "black";
    } else if (colorId === "green") {
      bottom.style.backgroundColor = "lightgreen";
      e.target.style.backgroundColor = "lightgreen";
      e.target.style.color = "black";
    } else if (colorId === "red") {
      bottom.style.backgroundColor = "crimson";
      e.target.style.backgroundColor = "crimson";
      e.target.style.color = "black";
    } else if (colorId === "yellow") {
      bottom.style.backgroundColor = "gold";
      e.target.style.backgroundColor = "gold";
      e.target.style.color = "black";
    }
  });
});
