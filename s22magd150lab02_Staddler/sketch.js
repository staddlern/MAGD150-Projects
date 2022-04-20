function setup() {
  createCanvas(800, 500);
}

function draw() {
  colorMode(RGB);
  let nightsky = color(10, 20, 50);
  let silhouette = color(0, 0, 0);
  let drink = color(75, 75, 75);
  colorMode(HSB);
  let grass = color(130, 71, 29);
  let stars = color('#ffffff');
  strokeWeight(1);
  background(nightsky);
  stroke(grass);
  fill(grass);
  arc(0, 600, 1200, 600, HALF_PI, 0);
  stroke(silhouette);
  fill(silhouette);
  point(250, 400);
  beginShape();
    vertex(240, 385);
    vertex(245, 380);
    vertex(255, 380);
    vertex(260, 385);
    vertex(260, 390);
    vertex(270, 388);
    vertex(270, 392);
    vertex(260, 395);
    vertex(260, 415);
    vertex(275, 420);
    vertex(270, 430);
    vertex(250, 425);
    vertex(240, 425);
    endShape(CLOSE);
  circle(250, 370, 20, 20);
  stroke(drink);
  fill(drink);
  quad(270, 380, 280, 380, 280, 400, 270, 400);
  stroke(stars);
  strokeWeight(10);
  point(100, 150);
  point(125, 50);
  point(200, 75);
  point(250, 200);
  point(300, 25);
  point(350, 150);
  point(375, 250);
  point(400, 50);
  point(450, 200);
  point(500, 100);
  point(525, 300);
  point(575, 150);
  point(650, 350);
  point(675, 225);
  point(750, 400);
  strokeWeight(75);
  point(750, 50);
}