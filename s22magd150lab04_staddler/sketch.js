let textY = 610;
let sliceX = 300;
let mousebool = false;
let clicking = false;
let spacing = false;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  let back_col = color(255, 150, 150);
  let crust = color(158, 107, 60);
  let cheese = color(255, 238, 163);
  let pepperoni = color(117, 8, 0);
  let olives = color(43, 64, 2);
  background(back_col);
  angleMode(DEGREES);
  //text
  strokeWeight(0);
  fill(255);
  textSize(18);
  text('Welcome to Minimalist Pizza! Push Space/Click to select toppings!', 25, textY);
  text('Hover over the right slice to enjoy!', 150, textY + 500);
  strokeWeight(20);
  stroke(crust);
  fill(cheese);
  //slice
  arc(sliceX, 300, 400, 400, 330, 30);

  //pizza
  for (let i = 30; i < 330; i += 60) {
    arc(300, 300, 400, 400, i, i + 60);
  }
  
  //pepperoni
  if (clicking) {
    strokeWeight(1);
    stroke(pepperoni);
    fill(pepperoni);
    ellipse(200, 300, 50, 50);
    ellipse(250, 200, 50, 50);
    ellipse(250, 400, 50, 50);
    ellipse(350, 200, 50, 50);
    ellipse(350, 400, 50, 50);
    ellipse(sliceX + 100, 300, 50, 50);
  }

  //olives? green pepperoni?
  if (spacing) {
    strokeWeight(1);
    stroke(olives);
    fill(olives);
    ellipse(150, 250, 30, 30);
    ellipse(250, 250, 30, 30);
    ellipse(300, 450, 30, 30);
    ellipse(350, 150, 30, 30);
    ellipse(325, 350, 30, 30);
    ellipse(sliceX + 150, 300, 30, 30);
  }

  if (textY > 50) {
    textY -= 10;
  }


  if (mouseX >= 300 && mouseX <= 500 && mouseY >= 200 && mouseY <= 400) {
    mousebool = true;
  }
  else {
    mousebool = false;
  }

  if (mousebool == true && sliceX < 350) {
    sliceX += 5;
  }
  else if (mousebool == false && sliceX > 300) {
    sliceX -= 5;
  }
}

function mousePressed() {
  clicking = true;
}

function mouseReleased() {
  clicking = false;
}

function keyPressed() {
  spacing = true;
}

function keyReleased() {
  spacing = false;
}