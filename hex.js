const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#"; // Need a variable that holds the "#" which every hex needs
  // Need to use a loop to produce a random number for each hex letter (6 letters)
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; // += generates a string with "#" and 6 values --> Doesn't over-ride the "#"
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor; // Background color matches random hexColor
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
