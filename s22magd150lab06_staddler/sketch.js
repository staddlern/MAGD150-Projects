//Game state controllers
let game_begin = false;
let game_over = false;

//X and Y of the player character
let coptor_x;
let coptor_y;

//X and Y of the projectiles the player must dodge
let ball_x = [500, 500, 500, 500, 500];
let ball_y = [300, 300, 300, 300, 300];

//Directions travelled by the projectiles
let ball_move_x = [1, 1, -1, -1, 1];
let ball_move_y = [1, -1, -1, 1, 1];

//Frame count after the game starts
let count = 0;

//Game over variables for the game over animation
let gameover_y;
let gameover_size = 1;
let gameover_angle = 0;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  //Setting up the background and top/bottom walls
  background(0);
  rectMode(CORNERS);
  stroke(color(255, 0, 0));
  fill(color(255, 0, 0));
  rect(0, 0, 1000, 50);
  rect(0, 550, 1000, 600);
  stroke(color(0, 255, 0));
  fill(color(0, 255, 0));

  //Drawing the player character
  if (game_over == false) {
    coptor_x = mouseX;
    coptor_y = mouseY;
    gameover_y = mouseY;
    beginShape();
      vertex(coptor_x - 25, coptor_y - 25);
      vertex(coptor_x - 5, coptor_y - 25);
      vertex(coptor_x - 5, coptor_y - 40);
      vertex(coptor_x - 35, coptor_y - 40);
      vertex(coptor_x - 35, coptor_y - 50);
      vertex(coptor_x + 35, coptor_y - 50);
      vertex(coptor_x + 35, coptor_y - 40);
      vertex(coptor_x + 5, coptor_y - 40);
      vertex(coptor_x + 5, coptor_y - 25);
      vertex(coptor_x + 25, coptor_y - 25);
      vertex(coptor_x + 25, coptor_y + 25);
      vertex(coptor_x - 25, coptor_y + 25);
      endShape(CLOSE);
  }

  //If the game hasn't started yet, display a message to click to begin
  if (game_begin == false) {
    noStroke();
    fill(color(0, 255, 0));
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Click to begin the game", 500, 300);
  }

  //If the player has lost, display text saying game over and play the game over animation
  else if (game_over == true) {
    noStroke();
    fill(color(0, 255, 0));
    textAlign(CENTER, CENTER);
    textSize(24);
    text(count, 500, 300);
    text("Game Over! Try again!", 500, 400);
    gameover_y += 3;
    gameover_angle += 5;
    if (gameover_size >= 0) {
      gameover_size -= 0.01;
    }
    gameOverAnimation();
  }

  //Standard state of the game, displaying the score and moving the projectiles
  else {
    noStroke();
    fill(color(0, 255, 0));
    textAlign(CENTER, CENTER);
    textSize(24);
    text(count, 500, 300);

    for (let i = 0; i < 5; i++) {
      drawBall(i);
    }
    gameOverCheck();
    count++;
  }
}

//Click to start the game
function mousePressed() {
  game_begin = true;
}

//Creates the projectiles and moves them
function drawBall(i) {
  if (game_begin && count > (600 * i)) {

    rectMode(CENTER);
    stroke(color(255, 0, 0));
    fill(color(255, 0, 0));
    rect(ball_x[i], ball_y[i], 20, 20);
    ball_x[i] += ball_move_x[i];
    ball_y[i] += ball_move_y[i];
    if (ball_x[i] <= 10 || ball_x[i] >= 990) {
      ball_move_x[i] *= -1;
    }
    if (ball_y[i] <= 60 || ball_y[i] >= 540) {
      ball_move_y[i] *= -1;
    }
  }
}

//Checks if the player has lost the game
function gameOverCheck() {
  if (coptor_y <= 75 || coptor_y >= 525) {
    game_over = true;
  }
  else {
    for (let i = 0; i < 4; i++) {
      if (dist(coptor_x, coptor_y, ball_x[i], ball_y[i]) <= 35 && ball_x[i] != 500 && ball_y[i] != 300) {
        game_over = true;
      }
    }
  }
}

//Plays the animation of the player falling once the game is over
function gameOverAnimation() {
  push();
  rectMode(CENTER);
  translate(coptor_x, gameover_y);
  angleMode(DEGREES);
  rotate(gameover_angle);
  scale(gameover_size);
  rect(0, 0, 50, 50);
}