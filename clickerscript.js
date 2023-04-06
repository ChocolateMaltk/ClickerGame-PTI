// Global Variables \\

let cash = BigInt(999999999999999999);
cash = BigInt(0);
let multiplier = 1;
let passive_gain = 0;
let clickVal = 1;

// Cash-related scripts

// Define the updateCashDisplay function
function updateCashDisplay() {
  cashDisplay.innerText = cash.toString();
}

// Update Cash Display
document.addEventListener("DOMContentLoaded", function () {
  // Get the cash display element
  const cashDisplay = document.getElementById("cashDisplay");
  updateCashDisplay();
});

// Biar gak ada angka negatif
setInterval(() => {
  if (cash < BigInt(0)) {
    cash = BigInt(0);
    updateCashDisplay();
  }
}, 100);

function updateClickValDisplay() {
  clickvalcont.innerText = clickVal.toString();
}

document.addEventListener("DOMContentLoaded", function () {
  const clickValDisplay = document.getElementById("clickvalcont");
  updateClickValDisplay();
});

// Script untuk Button di tengah.

function grayOutImage(btn) {
  btn.classList.toggle("grayed-out"); // Toggle "grayed-out" class on button
  btn.getElementsByTagName("img")[0].classList.toggle("shrinked"); // Toggle "shrinked" class on image

  if (btn.classList.contains("grayed-out") && btn.getElementsByTagName("img")[0].classList.contains("shrinked")) {
    setTimeout(function () {
      btn.classList.toggle("grayed-out");
      btn.getElementsByTagName("img")[0].classList.toggle("shrinked");
    }, 100);
  }
}

function generateCash(btn) {
  cash = cash + BigInt(clickVal) * BigInt(multiplier);
  updateCashDisplay();
}

// Script untuk Upgrade Click Value

function upgradeClickValue(buttonId, requiredCash, newClickVal) {
  let button = document.getElementById(buttonId);
  checkCash(requiredCash, button);

  button.onclick = function () {
    cash -= BigInt(requiredCash);
    clickVal += newClickVal;
    updateCashDisplay();
    updateClickValDisplay();
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
  };
}

function checkCash(requiredCash, button) {
  if (cash >= BigInt(requiredCash)) {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
  }
}

// Check cv1 button every 500 milliseconds
setInterval(() => {
  checkCash(10, cv1);
}, 500);

// Check cv2 button every 500 milliseconds
setInterval(() => {
  checkCash(100, cv2);
}, 500);

// Check cv3 button every 500 milliseconds
setInterval(() => {
  checkCash(1000, cv3);
}, 500);

// Check cv4 button every 500 milliseconds
setInterval(() => {
  checkCash(5000, cv4);
}, 500);

// Script untuk upgrade multiplier

function multiplier2(){
  multiplier = 2
}
function multiplier10(){
  multiplier = 10
}
function multiplier1000(){
  multiplier = 1000
}
function multiplier_default(){
  multiplier = 1
}