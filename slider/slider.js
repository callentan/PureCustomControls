console.log("slider js loading");

var min = 1;
var max = 100;
var initValue = 50;

// Init
var containerElement = document.getElementById("container");
var sliderElement = document.getElementById("slider");
var tooltipElement = document.getElementById("tooltip");
sliderElement.setAttribute("min", min);
sliderElement.setAttribute("max", max);
sliderElement.setAttribute("value", initValue);
this.tooltipElement.innerText = initValue;
tooltipElement.style.left = `${(initValue / max) * 100}%`;

// Listen value change
containerElement.addEventListener("pointerover", () => {
  tooltipElement.style.display = "block";
});
containerElement.addEventListener("pointerout", () => {
  tooltipElement.style.display = "none";
});
sliderElement.addEventListener("input", (event) => {
  this.tooltipElement.innerText = event.target.value;
  tooltipElement.style.left = `${(event.target.value / max) * 100}%`;
});

// Set arrow control
var upBtn = document.getElementById("up");
var downBtn = document.getElementById("down");
upBtn.addEventListener("click", () => {
  var newValue = Number(this.sliderElement.value) - 1;
  if (newValue < min) {
    return;
  }
  this.sliderElement.value = newValue;
  this.tooltipElement.innerText = newValue;
  tooltipElement.style.left = `${(newValue / max) * 100}%`;
});
downBtn.addEventListener("click", () => {
  var newValue = Number(this.sliderElement.value) + 1;
  if (newValue > max) {
    return;
  }
  this.sliderElement.value = newValue;
  this.tooltipElement.innerText = newValue;
  tooltipElement.style.left = `${(newValue / max) * 100}%`;
});

console.log("slider js loaded");
