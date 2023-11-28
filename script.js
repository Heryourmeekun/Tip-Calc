let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let calculateBtn = document.querySelector(".calculate-btn");
let balance = document.querySelector(".bal");

let currentBillVal;
let currentTipVal;

let getStoredBillVal = JSON.parse(localStorage.getItem("ScurrentBillVal"));
let getStoredTipVal = JSON.parse(localStorage.getItem("ScurrentTipVal"));

if (getStoredBillVal && getStoredTipVal) {
  input1.value = getStoredBillVal;
  input2.value = getStoredTipVal;
}

calculateBtn.addEventListener("click", () => {
  currentBillVal = input1.value;
  currentTipVal = input2.value;
  localStorage.setItem("ScurrentBillVal", currentBillVal);
  localStorage.setItem("ScurrentTipVal", currentTipVal);
  calculateBtn = input1.value * (1 + input2.value / 100);
  balance.innerHTML = calculateBtn;
});
