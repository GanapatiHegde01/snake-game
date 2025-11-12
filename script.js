const board = document.querySelector(".board");

const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientWidth / blockWidth);
const cols = Math.floor(board.clientHeight / blockHeight);

const blocks = [];
const snake = [
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
    block.innerHTML = `${row}-${col}`;
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
    alert("Game over");
    clearInterval(intervalId);
  }

  //   Eating food logic
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    snake.unshift(head);
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
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

let intervalId = null;

// Creating frames using interval function
intervalId = setInterval(() => {
  render();
}, 400);

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
