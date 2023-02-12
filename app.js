const image = document.querySelector(".image");
const title = document.querySelector(".title");
const select = document.querySelector(".select");
const player1Title = document.querySelector(".player-one");
const player2Title = document.querySelector(".player-two");
const player1Btn = document.querySelector(".player-one-btn");
const player2Btn = document.querySelector(".player-two-btn");
const resetBtn = document.querySelector(".reset-btn");

let player1score = 0;
let player2score = 0;
let gameFinish = 5;
let gameOver = false;
let playerSelect = 4;
let audio = new Audio("audio/clap.wav");


function userSelect() {
  gameFinish = select.value
  console.log(gameFinish);
}
userSelect()


function randomImage() {
  let random = Math.trunc(Math.random() * 5 + 1);
  image.src = `./images/ping-pong-${random}.jpg`;
}
randomImage();


player1Btn.addEventListener("click", function () {
  if (!gameOver) {
    player1score++;
    player1Title.textContent = player1score;
    if (gameFinish == player1score) {
      player1Title.style.color = "green";
      player2Title.style.color = "red";
      title.textContent = "Player 1 Win🏆";
      audio.play();
      gameOver = true;
    }
  }
});


player2Btn.addEventListener("click", function () {
  if (!gameOver) {
    player2score++;
    player2Title.textContent = player2score;
    if (gameFinish == player2score) {
      player1Title.style.color = "red";
      player2Title.style.color = "green";
      title.textContent = "Player 2 Win🏆";
      audio.play();
      gameOver = true;
    }
  }
});

resetBtn.addEventListener("click", function () {
  player1Title.textContent = 0;
  player2Title.textContent = 0;
  player1Title.style.color = "#123456";
  player2Title.style.color = "#123456";
  title.textContent = "Table Tennis";
  audio.pause();
  randomImage();
  player1score = 0;
  player2score = 0;
  gameFinish = 5;
  gameOver = false;
});
