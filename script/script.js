import { Column } from "./Column.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

const columns = [];
const columnsCount = canvas.width / FONT_SIZE;

for (let i = 0; i < columnsCount; i++) {
  if (i % 5) {
    columns.push(new Column(i * FONT_SIZE - 3, FONT_SIZE + 5, canvas.height - 20, context));
  } else {
    continue;
  }
};

context.font = `bold ${FONT_SIZE}px monospace`;

function animateMatrix() {
  context.fillStyle = "rgba(0, 0, 0, 0.06)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "green";
  columns.forEach(column => column.darwSymbol());

  setTimeout(() => requestAnimationFrame(animateMatrix), 50);
}

animateMatrix();

let dots = 0;
function animateWakeUp() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  const text = 'Wake up, Neo' + '.'.repeat(dots);
  context.fillStyle = 'green';
  context.fillText(text, 40, 50);
  
  dots = (dots + 1) % 4;
  setTimeout(() => requestAnimationFrame(animateWakeUp), 600);
}

// animateWakeUp();
