let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let context = canvas.getContext("2d");

type Rectangle = [
  number,
  number,
  number,
  number,
  string
];

const drawRectangles = () => {
  const numRectanglesInput = document.getElementById("numRectangInput") as HTMLInputElement;
  const numRectangles = parseInt(numRectanglesInput.value);
  for (let i = 0; i < numRectangles; i++) {
    const x = getRandomNumber(canvas.width);
    const y = getRandomNumber(canvas.height);
    const width = getRandomNumber(200);
    const height = getRandomNumber(200);
    const color = getRandomColor();
    drawRectangle(x, y, width, height, color);
  }
}
const drawRectangle = (...[x,y,width,height,color]: Rectangle) => {
  context!.fillStyle = color;
  context!.fillRect(x, y, width, height);
  context!.strokeRect(x, y, width, height);
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