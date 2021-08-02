"use strict";
const play = document.querySelector(".play");
const newGame = document.querySelector(".newGame");
let input0 = document.querySelector("#name-player0");
let inputX = document.querySelector("#name-playerX");
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

const cellBtn = document.querySelectorAll(".btn");

const init = function () {
  cellBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      let data = e.target.dataset.cell;
      // console.log(data);
      press(data);
    })
  );

  const round = "⭕";
  const cross = "❌";
  let z = "";

  const press = function (cellNum) {
    // console.log(count);
    player.forEach((player) => player.classList.toggle("active-player"));
    arrow.forEach((arrow) => arrow.classList.toggle("active-arrow"));
    let cell = `pid-${cellNum}`;
    let butt = `btn-${cellNum}`;

    let bg = `cell-${cellNum}`;
    z = count % 2 === 1 ? round : cross;
    document.getElementById(cell).textContent = z;

    let btn = document.querySelector(`.${butt}`);
    btn.disabled = true;
    count++;
    console.log("count:  ", count);
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
      // cellBtn.forEach((btn) => (btn.disabled = true));
      winner(`${z}`);
    } else if (count === 10) {
      alert(" oh it's a tie ❗❗❗");
      reset_game();
    }
  }

  //display winner
  let winnerName = "";
  const display_winner = function (sym) {
    result.classList.remove("hidden");

    winnerName = sym === "⭕" ? input0 : inputX;

    result.innerHTML = `${winnerName.value} ${sym} won 🎉`;
    document.querySelector("main").style.opacity = 0;
    console.log("result", sym);
  };

  //timer for result
  const winner = function (sym) {
    const timer = setTimeout(function () {
      display_winner(sym);
    }, 100);
  };

  // call  reset_game() on click
  reset.addEventListener("click", function () {
    reset_game();
  });
};

//iife call for arrow
(function () {
  setInterval(() => {
    arrow.forEach((arrow) => arrow.classList.toggle("visibility"));
  }, 250);
})();

// starting form
play.addEventListener("click", function () {
  if (input0.value !== "" && inputX.value !== "") {
    document.querySelector("header").classList.remove("hidden");
    document.querySelector(".start-title").classList.add("hidden");
    document.querySelector(".starter").classList.add("hidden");
    document.querySelector("main").style.opacity = 1;
    console.log(count);
    document.querySelectorAll("#btn").forEach((btn) => (btn.disabled = false));
    init();
  } else {
    alert("enter name");
  }
});

//resetGame
const reset_game = function () {
  count = 1;
  document.querySelectorAll(".pid").forEach((p) => (p.innerHTML = ""));
  result.classList.add("hidden");
  result.innerHTML = "";
  document.querySelector("main").style.opacity = 1;
  cellBtn.forEach((btn) => (btn.disabled = false));
  player0.classList.add("active-player");
  playerX.classList.remove("active-player");
  arrow0.classList.add("active-arrow");
  arrowX.classList.remove("active-arrow");
};

//newGame
newGame.addEventListener("click", function () {
  document.querySelector(".start-title").classList.remove("hidden");
  document.querySelector("header").classList.add("hidden");
  cellBtn.forEach((btn) => (btn.disabled = true));
  reset_game();
  inputX.value = input0.value = "";
  document.querySelector(".starter").classList.remove("hidden");
  document.querySelector("main").style.opacity = 0;
});
