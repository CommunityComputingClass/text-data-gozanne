let screenWidth = 1470 // Change these to set the size of the window
let screenHeight = 800

let font1;
let font2; 
let i = screenHeight;
let balloons = [];
let balloonCount = 200; // Change this to adjust the amount of starting balloons

class balloon {
  constructor(xStart, yStart,) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.color = [(random(0, 255)), (random(0, 255)), (random(0, 255))];
    this.speed = random(0.5, 3);
    this.x = this.xStart;
    this.y = this.yStart;
  }

  float() {
    balloonRender(this.x, this.y, this.color);
    this.y = this.y - this.speed;
  }

  follow() {
    this.x = mouseX
    this.y = mouseY
    balloonRender(this.x, this.y, this.color);
  }

  lagCheck() {
    if (this.y < -100) {
      balloons.splice(balloons.indexOf(this) , 1)
    }
  }

  pop() {
  }
}

function preload(){
  font1 = loadFont("Mayonice.ttf")
  font2 = loadFont("Daily Bubble.ttf")
  for (let a = 0; a < balloonCount; a++) {
    balloons.push(new balloon(random(0, screenWidth), random(screenHeight, (screenHeight + 200))));
  }
}

function setup() {
  createCanvas(screenWidth, screenHeight);
}

function draw() {
  strokeWeight(4)
  background(200)
  
  for (let b = 0; b < (balloons.length - 1); b++) {
    balloons[b].lagCheck();
    balloons[b].float();
  }

  if (keyIsPressed == true) {
    balloons.push(new balloon(random(0, 400), 400));
  }

  balloons[balloons.length - 1].follow()

  i --
  title()
  message()  
}

function mouseClicked() {
  balloons.push(new balloon(mouseX, mouseY));
}

function balloonRender(x, y, c) {
  fill(c)
  arc(x, y, 50, 50, PI, TWO_PI)
  arc(x, y, 50, 80, 0, PI)
  noFill()
  bezier(x, (y+40), (x-20), (y+60), (x+20), (y+70), x, (y+90));
}

function title() {
  fill("blue")
  textFont(font2)
  textAlign(CENTER, CENTER)
  textSize(50)
  text("Happy Birthday!", (screenWidth/2), i);
}


function message() {
  fill("blue")
  textFont(font2)
  textAlign(CENTER, CENTER)
  textSize(30)
  text("Click or use Spacebar to create more balloons!", (screenWidth/2), (i+100));
}
