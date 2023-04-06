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
