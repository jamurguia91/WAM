const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#Time Left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 600);
}

// Calling the moving mole function
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    alert("Game Over! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);

// Countdown Timer isnt working, left off at 1:24:53