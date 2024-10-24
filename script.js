let img;
let currentPage = 1;  // Variable to track the current page
let buttons = [];     // Array to hold button elements so they can be removed
let buttonsCreated = false;  // Variable to track if buttons are already created

function preload() {
  img = loadImage("images.png");  // Preload the image before setup
}

function setup() {
  createCanvas(200, 300);
}

function draw() {
  background(220);

  // Render content based on the current page
  if (currentPage === 1) {
    displayPage1Content();  // Continuously display page 1 content (image and text)
    if (!buttonsCreated) {
      displayPage1Buttons();  // Create buttons only once
    }
  } else if (currentPage === 2) {
    displayPage2Content();  // Continuously display page 2 content (text)
    if (!buttonsCreated) {
      displayPage2Buttons();  // Create buttons only once
    }
  } else if (currentPage === 3) {
    displayEmptyPage();  // Display an empty page when game is selected
  }
}

// Function to display the content of Page 1
function displayPage1Content() {
  // Display the image and title
  image(img, 20, 70, 150, 150);
  textSize(15);
  fill(0);
  text("Welcome to Memory Lane", 10, 20);
}

// Create buttons for Page 1
function displayPage1Buttons() {
  clearButtons();  // Clear any existing buttons to prevent overlap

  // Create the Start Game button for page 1
  let startButton = createButton('Start Game');
  startButton.position(70, 270);
  startButton.mousePressed(() => {
    currentPage = 2;
    buttonsCreated = false;  // Allow button creation for page 2
    clearButtons();  // Remove buttons when switching to page 2
  });
  buttons.push(startButton);  // Add the button to the list for tracking
  buttonsCreated = true;  // Mark buttons as created
}

// Function to display the content of Page 2
function displayPage2Content() {
  // Display game selection title
  textSize(15);
  fill(0);
  text("Pick Your Next Game", 20, 30);
}

// Create buttons for Page 2
function displayPage2Buttons() {
  clearButtons();  // Clear any existing buttons

  // Create buttons for the games
  let button1 = createButton('Connect your Dots!');
  button1.position(40, 70);
  button1.style('background-color', 'blue');
  button1.style('color', 'white');
  button1.mousePressed(() => { currentPage = 3; clearButtons(); });
  buttons.push(button1);

  let button2 = createButton('Mind Maze');
  button2.position(40, 120);
  button2.style('background-color', 'blue');
  button2.style('color', 'white');
  button2.mousePressed(() => { currentPage = 3; clearButtons(); });
  buttons.push(button2);

  let button3 = createButton('Memory Matching');
  button3.position(40, 170);
  button3.style('background-color', 'blue');
  button3.style('color', 'white');
  button3.mousePressed(() => { currentPage = 3; clearButtons(); });
  buttons.push(button3);

  // Back to homepage button
  let backButton = createButton('Back to Homepage');
  backButton.position(10, 270);
  backButton.style('font-size', '10px');
  backButton.mousePressed(() => {
    currentPage = 1;
    buttonsCreated = false;  // Allow button creation for page 1
    clearButtons();  // Remove buttons when switching back to page 1
  });
  buttons.push(backButton);

  buttonsCreated = true;  // Mark buttons as created
}

// Function for game buttons to go to an empty page
function displayEmptyPage() {
  background(255);
  fill(0);
  textSize(20);
  text("Empty Game Page", 15, 150);
}

// Clear all buttons and elements when switching pages
function clearButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();  // Remove each button from the DOM
  }
  buttons = [];  // Reset the buttons array
  buttonsCreated = false;  // Allow buttons to be recreated
}