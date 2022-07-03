"use strict";

const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");

let num;
const init = function () {
  num = 0;
};
init();

btnDecrease.addEventListener("click", function () {
  document.querySelector(".number").textContent = num -= 1;
});

btnIncrease.addEventListener("click", function () {
  document.querySelector(".number").textContent = num += 1;
});

btnReset.addEventListener("click", function () {
  init();
  document.querySelector(".number").textContent = 0;

  console.log("works");
});
