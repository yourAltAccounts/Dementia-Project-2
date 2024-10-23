let img;

function preload() {
  img = loadImage("images.png");
}

function displayTitle() {
  textSize(15);
  fill(0);
  text("Welcome to Memory Lane", 10, 20);
}
function setup() {
  createCanvas(200, 300);
  let button = createButton('Start Game');
  button.position(70, 270);
  button.mousePressed(startGame);
}

function draw() {
  background(220);
  image(img, 20, 70, 150, 150);
  displayTitle();
}

function startGame() {
  window.open("");
}