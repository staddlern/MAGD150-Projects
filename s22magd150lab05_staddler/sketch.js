let circle_x = 340;
let circle_y = 425;
let rect_x1 = 375;
let rect_y1 = 410;
let rect_x2 = 410;
let rect_y2 = 440;
let power = false;
let ang = 0;
function setup() {
  createCanvas(1000, 600);
}

function draw() {
  angleMode(DEGREES);
  let ground = color(240, 224, 201);
  let tvframe = color(102, 60, 0);
  let screen = 50;
  if (power == true) {
    screen = 150;
  }
  let circle_on = color(43, 255, 0);
  let circle_off = color(20, 120, 0);
  let rect_on = color(224, 0, 0);
  let rect_off = color(120, 0, 0);
  background(100);
  rectMode(CORNERS);
  strokeWeight(1);

  //drawing the TV
  stroke(0);
  fill(ground);
  rect(-1, 500, 1001, 601);
  stroke(tvframe);
  fill(tvframe);
  rect(300, 450, 325, 500);
  rect(675, 450, 700, 500);
  rect(300, 175, 700, 450);
  stroke(screen);
  fill(screen);
  rect(325, 200, 675, 400);
  strokeWeight(20);
  stroke(75);
  line(425, 125, 450, 175);
  line(575, 125, 550, 175);

  //drawing the buttons
  strokeWeight(1);
  stroke(circle_on);
  if (dist(mouseX, mouseY, circle_x, circle_y) <= 15) {
    fill(circle_off);
  }
  else {
    fill(circle_on);
  }
  ellipse(circle_x, circle_y, 30, 30);
  stroke(rect_on);
  if (mouseX >= rect_x1 && mouseX <= rect_x2 && mouseY >= rect_y1 && mouseY <= rect_y2) {
    fill(rect_off);
  }
  else {
    fill(rect_on);
  }
  rect(rect_x1, rect_y1, rect_x2, rect_y2);
  textSize(11);
  strokeWeight(0);
  stroke(0);
  fill(0);
  text('On', 331, 430);
  text('Off', 385, 430);

  //drawing the loading image (if the TV is on)
  strokeWeight(1);
  if (power) {
    for (let i = 0; i < 8; i++) {
      stroke(200, 200, 200, 255 * ((i+1)/8));
      fill(200, 200, 200, 255 * ((i+1)/8));
      ellipse(500 + (30 * cos(ang + (i * 45))), 300 + (30 * sin(ang + (i * 45))), 15, 15);
    }
    textSize(18);
    strokeWeight(0);
    text('Loading, please wait...', 420, 380);
    if (ang < 360) {
      ang += 2;
    }
    else {
      ang = 0;
    }
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, circle_x, circle_y) <= 15) {
    power = true;
  }
  else if (mouseX >= rect_x1 && mouseX <= rect_x2 && mouseY >= rect_y1 && mouseY <= rect_y2) {
    power = false;
  }
}