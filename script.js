const board = document.querySelector(".board");

const blockHeight = 50;
const blockWidth = 50;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

const startGame = document.querySelector(".btn-start");
const restartGame = document.querySelector(".btn-restart");

const modal = document.querySelector(".modal");
const gameStartModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");

const highScoreElement = document.getElementById("high-score");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time");

const eatFoodSound = new Audio("./sounds/eating.wav");
const smashedSound = new Audio("./sounds/smash.mp3");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timer = `00-00`;

highScoreElement.innerHTML = highScore;
scoreElement.innerHTML = score;
timerElement.innerHTML = timer;
const blocks = [];
let snake = [
  {
    x: 1,
    y: 3,
  },
];

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

let direction = "right";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  let head = null;
  //   Random food Generation
  blocks[`${food.x}-${food.y}`].classList.add("food");

  //   Changing the snake moving direction
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  //   Boundry Logic
  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    smashedSound.currentTime = 0;
    smashedSound.play();
    modal.style.display = "flex";
    gameStartModal.style.display = "none";
    gameOverModal.style.display = "flex";
    clearInterval(intervalId);
    return;
  }

  // Self collision logic
  for (let i = 0; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      smashedSound.currentTime = 0;
      smashedSound.play();
      modal.style.display = "flex";
      gameStartModal.style.display = "none";
      gameOverModal.style.display = "flex";
      clearInterval(intervalId);
      return;
    }
  }

  //   Eating food logic
  if (head.x === food.x && head.y === food.y) {
    eatFoodSound.currentTime = 0;
    eatFoodSound.play();
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.unshift(head);
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    score += 10;
    scoreElement.innerHTML = score;

    // updating highscore
    if (score > highScore) {
      localStorage.setItem("highScore", score);
    }
  }

  //   Snake Move logic
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
  snake.unshift(head);
  snake.pop();
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// Game restart Logic
restartGame.addEventListener("click", () => {
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  direction = "down";
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
  modal.style.display = "none";

  restart();
});

function restart() {
  snake = [
    {
      x: 1,
      y: 3,
    },
  ];

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalId = setInterval(() => {
    render();
  }, 400);

  score = 0;
  timer = `00-00`;
  highScore = localStorage.getItem("highScore");

  scoreElement.innerHTML = score;
  timerElement.innerHTML = timer;
  highScoreElement.innerHTML = highScore;
}

let intervalId = null;
let timerIntervalId = null;
// Triggers based on keypress
addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key == "ArrowDown") {
    direction = "down";
  } else if (e.key == "ArrowRight") {
    direction = "right";
  } else if (e.key == "ArrowLeft") {
    direction = "left";
  }
});

// Start Game Button
startGame.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 400);

  timerIntervalId = setInterval(() => {
    let [min, sec] = timer.split("-").map(Number);

    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    timer = `${min}-${sec}`;
    timerElement.innerHTML = timer;
  }, 1000);
});
