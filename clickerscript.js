// Global Variables \\

let cash = BigInt(999999999999999999);
cash = BigInt(0);
let multiplier = 1;
let passive_gain = BigInt(0);
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
function updateMultiplierDisplay() {
  multiplierCount.innerText = multiplier.toString();
}
function updatepassiveGainDisplay() {
  passiveGain.innerText = passive_gain.toString();
}

document.addEventListener("DOMContentLoaded", function () {
  const clickValDisplay = document.getElementById("clickvalcont");
  updateClickValDisplay();
});

document.addEventListener("DOMContentLoaded", function () {
  const multiplierCount = document.getElementById("multiplierCount");
  updateMultiplierDisplay();
});

document.addEventListener("DOMContentLoaded", function () {
  const passiveGainDisplay = document.getElementById("passiveGain");
  updatepassiveGainDisplay();
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
  checkCash(100, up1);
}, 500);

// Check cv2 button every 500 milliseconds
setInterval(() => {
  checkCash(1000, up2);
}, 500);

// Check cv3 button every 500 milliseconds
setInterval(() => {
  checkCash(10000, up3);
}, 500);

// Check cv4 button every 500 milliseconds
setInterval(() => {
  checkCash(100000, up4);
}, 500);

// Script untuk upgrade multiplier

function multiplier2() {
  multiplier = 2;
  updateMultiplierDisplay();
}
function multiplier10() {
  multiplier = 10;
  updateMultiplierDisplay();
}
function multiplier1000() {
  multiplier = 1000;
  updateMultiplierDisplay();
}
function multiplier_default() {
  multiplier = 1;
  updateMultiplierDisplay();
}

//fitur tambahan
function poor() {
  cash = BigInt(0);
  updateCashDisplay();
  window.alert("Saya Bangkrut!!!!!");
}
function billion() {
  cash = BigInt(99999999999999999999);
  updateCashDisplay();
  window.alert("Doa Terkabul");
}

function auto_click(button_id) {
  let button = document.getElementById(button_id);
  let required_cash = parseInt(button.getAttribute("data-required-cash"));
  let gain = parseInt(button.getAttribute("gain"));

  if (cash >= required_cash) {
    cash -= BigInt(required_cash);
    passive_gain += BigInt(gain);
    button.setAttribute("disabled", true);
    updateCashDisplay();
    updatepassiveGainDisplay();
  } else {
    alert("Uang Anda tidak cukup! Anda perlu ${requiredCash} untuk\nmembuka cabang di sini!");
  }
}

// Check Autoclick

function check_ac_status(city_id) {
  const requiredCash = parseInt(document.getElementById(city_id).getAttribute("data-required-cash"));
  const button = document.getElementById(city_id);
  let clicked = false;
  if (cash >= BigInt(requiredCash) && clicked == false) {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
    clicked = true;
    updatepassiveGainDisplay();
  } else {
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
  }
}

setInterval(function () {
  check_ac_status("ac-1");
}, 100);
setInterval(function () {
  check_ac_status("ac-2");
}, 100);
setInterval(function () {
  check_ac_status("ac-3");
}, 100);
setInterval(function () {
  check_ac_status("ac-4");
}, 100);
setInterval(function () {
  check_ac_status("ac-5");
}, 100);
setInterval(function () {
  check_ac_status("ac-6");
}, 100);
setInterval(function () {
  check_ac_status("ac-7");
}, 100);
setInterval(function () {
  check_ac_status("ac-8");
}, 100);

function doAutoClick() {
  cash += BigInt(passive_gain);
}

setInterval(function () {
  doAutoClick();
}, 1000);

setInterval(function () {
  updateCashDisplay();
  updatepassiveGainDisplay();
}, 100);
