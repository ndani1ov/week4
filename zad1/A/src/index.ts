let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let context = canvas.getContext("2d");

type line = [
  number,
  number,
  number,
  number,
  string
];

const drawLines = () => {
  const numLinesInput = document.getElementById("numLinesInput") as HTMLInputElement;
  const numLines = parseInt(numLinesInput.value);
  for (let i = 0; i < numLines; i++) {
    const startX = getRandomNumber(canvas.width);
    const startY = getRandomNumber(canvas.height);
    const endX = getRandomNumber(canvas.width);
    const endY = getRandomNumber(canvas.height);
    const color = getRandomColor();
    drawLine(startX, startY, endX, endY, color);
  }
}

const drawLine = (...[startX,startY,endX,endY,color]: line) => {
  context!.beginPath();
  context!.moveTo(startX, startY);
  context!.lineTo(endX, endY);
  context!.strokeStyle = color;
  context!.stroke();
}
const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const clearCanvas = () => {
  context!.clearRect(0, 0, canvas.width, canvas.height);
}

