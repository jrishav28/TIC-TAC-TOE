"use strict";

let count = 1;
const aa = document.getElementById("pid-11");
const ab = document.getElementById("pid-12");
const ac = document.getElementById("pid-13");
const ba = document.getElementById("pid-21");
const bb = document.getElementById("pid-22");
const bc = document.getElementById("pid-23");
const ca = document.getElementById("pid-31");
const cb = document.getElementById("pid-32");
const cc = document.getElementById("pid-33");

const reset = document.querySelector(".reset");
const result = document.querySelector("#result");
const tab = document.querySelector("#tab");
const player = document.querySelectorAll(".player");
const player0 = document.querySelector(".player0");
const playerX = document.querySelector(".playerX");
const arrow = document.querySelectorAll(".arrow");
const arrow0 = document.querySelector(".arrow-0");
const arrowX = document.querySelector(".arrow-X");

const round = "⭕";
const cross = "❌";
let z = "";

const press = function (cellNum) {
  player.forEach((player) => player.classList.toggle("active-player"));
  arrow.forEach((arrow) => arrow.classList.toggle("active-arrow"));
  let a = `pid-${cellNum}`;
  let b = `btn-${cellNum}`;

  let bg = `cell-${cellNum}`;
  // console.log(a);
  z = count % 2 === 1 ? round : cross;
  document.getElementById(a).textContent = z;

  let btn = document.querySelector(`.${b}`);

  count++;
  //  console.log(aa.innerHTML);
  if (count > 5) checkWinner(z);
};

// check winner
function checkWinner(z) {
  if (
    (aa.innerHTML == z && bb.innerHTML == z && cc.innerHTML == z) ||
    (aa.innerHTML == z && ab.innerHTML == z && ac.innerHTML == z) ||
    (aa.innerHTML == z && ba.innerHTML == z && ca.innerHTML == z) ||
    (ba.innerHTML == z && bb.innerHTML == z && bc.innerHTML == z) ||
    (ca.innerHTML == z && cb.innerHTML == z && cc.innerHTML == z) ||
    (ab.innerHTML == z && bb.innerHTML == z && cb.innerHTML == z) ||
    (ca.innerHTML == z && bb.innerHTML == z && ac.innerHTML == z) ||
    (ac.innerHTML == z && bc.innerHTML == z && cc.innerHTML == z) ||
    (aa.innerHTML == z && bb.innerHTML == z && cc.innerHTML == z)
  ) {
    reset_game();
    document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true));
    winner(`${z}`);
  } else if (count === 10) {
    alert(" oh it's a tie ❗❗❗");
    reset_game();
  }
}

//display winner
const display_winner = function (sym) {
  result.classList.remove("hidden");
  result.innerHTML = `player ${sym} won 🎉`;
  document.querySelector("main").style.opacity = 0;
  console.log("result", sym);
};

//timer for result
const winner = function (sym) {
  const timer = setTimeout(function () {
    display_winner(sym);
  }, 100);
};

//reset buttun implementation
const reset_game = function () {
  count = 1;
  document.querySelectorAll(".pid").forEach((p) => (p.innerHTML = ""));
  result.classList.add("hidden");
  result.innerHTML = "";
  document.querySelector("main").style.opacity = 1;
  document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = false));
  player0.classList.add("active-player");
  playerX.classList.remove("active-player");
  arrow0.classList.add("active-arrow");
  arrowX.classList.remove("active-arrow");
};

// call  reset_game() on click
reset.addEventListener("click", function () {
  reset_game();
});

// arrow blinking
const arrowEffect = function () {
  setInterval(() => {
    arrow.forEach((arrow) => arrow.classList.toggle("visibility"));
  }, 250);
};
arrowEffect();
