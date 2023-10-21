let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let context = canvas.getContext("2d");

type Lines = [
  number,
  number,
  number,
  number,
  string
];

const drawLines = () => {
  const centerX = canvas.width / 2;
  const startY = canvas.height / 2;
  const maxOffset = 500;

  const numLinesInput = document.getElementById("numLinesInput") as HTMLInputElement;
  const numLines = parseInt(numLinesInput.value);
  context!.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numLines; i++) {
    const startX = 0;
    const endX = getRandomNumber(canvas.width);
    const offset = Math.abs(centerX - startY);
    const density = 1 - offset / centerX;
    const endY = startY + getRandomNumber(density * maxOffset * 2) - density * maxOffset;
    const color = "rgba(24, 24, 129, 0.09)";
    drawLine(startX, startY, endX, endY, color); 
  }
  
}
const drawLine = (...[startX, startY, endX, endY, color]: Lines) => {
  context!.beginPath();
  context!.moveTo(startX, startY);
  context!.lineTo(endX, endY);
  context!.strokeStyle = color;
  context!.stroke();
}
const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}
const clearCanvas = () => {
  context!.clearRect(0, 0, canvas.width, canvas.height);
}

