let btn = document.querySelector(".main_btn");
let copyBtn = document.querySelector(".copy_btn");
let body = document.querySelector("body");
let alert = document.querySelector(".copy_alert");

btn.addEventListener("click", changeBackground);
copyBtn.addEventListener("click", copy);

function changeBackground() {
  // copy button appears!
  copyBtn.style.opacity = "1";
  copyBtn.style.zIndex = "1";
  // random hex numbers
  randNum1 = Math.random() * 90 + 10;
  randNum2 = Math.random() * 90 + 10;
  randNum3 = Math.random() * 90 + 10;
  hexNums = [Math.round(randNum1), Math.round(randNum2), Math.round(randNum3)];
  color = `#${hexNums[0]}${hexNums[1]}${hexNums[2]}`;

  btn.innerHTML = color;
  btn.style.color = color;
  body.style.background = color;
}

function copy() {
  navigator.clipboard.writeText(color);
  copyAlert();
}

function copyAlert() {
  alert.style.transform = "translateY(0px)";
  alert.style.opacity = "1";
  alert.style.zIndex = "1";
  alert.style.transform = "translateY(-25px)";
  setTimeout(function () {
    alert.style.opacity = "0";
    alert.style.zIndex = "-1";
    alert.style.transform = "translateY(0px)";
  }, 1000);
}
