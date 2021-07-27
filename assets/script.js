"use strict";

console.log("play");
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

const cross = "❌";
const round = "⭕";
let z = "";

const press = function (cellNum) {
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

// const draw = function () {
//   console.log("draw");
// };

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
    winner(`${z}`);
  } else if (count === 10) {
    alert(" oh it's a tie ❗❗❗");
    reset_game();
  }
}

///display winner
const display_winner = function (sym) {
  result.classList.remove("hidden");
  result.innerHTML = `player ${sym} won 🎉`;
  tab.style.opacity = 0.2;
  // document.querySelector("#result").style.opacity = 1;
  console.log("result", sym);
};

///timer for result
const winner = function (sym) {
  const timer = setTimeout(function () {
    display_winner(sym);
  }, 500);
};

///reset buttun implementation
const reset_game = function () {
  count = 1;
  document.querySelectorAll("p").forEach((p) => (p.innerHTML = ""));
  result.classList.add("hidden");
  result.innerHTML = "";
  tab.style.opacity = 1;
};

/// call  reset_game() on click
reset.addEventListener("click", function () {
  reset_game();
});

// play();
