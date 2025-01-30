let font1;
let font2; 
let i = 400
let balloons = []

class balloon {
  constructor(xStart, yStart) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.color = [(random(0, 255)), (random(0, 255)), (random(0, 255))]
    this.speed = random(0.5, 3)
    this.x = this.xStart;
    this.y = this.yStart;
  }

  float() {
    balloonRender(this.x, this.y, this.color)
    this.y = this.y - this.speed
  }

  pop() {
    

  }
}

function preload(){
  font1 = loadFont("Mayonice.ttf")
  font2 = loadFont("Daily Bubble.ttf")
  for (let a = 0; a < 50; a++) {
    balloons.push(new balloon(random(0, 400), random(400, 600)));
  }
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  strokeWeight(4)
  background("red")
  //balloonRender(mouseX, mouseY, "blue")
  i --
  balloons.forEach(balloons => float)
  
  for (let b = 0; b < balloons.length; b++) {
    balloons[b].float();
    if (balloons[b].y < 0) {
      balloons[b]
    }
  }
  
  title()  
  //message()
}

function keyPressed() {
  //balloons.pop()
  balloons.push(new balloon(random(0, 400), 400));
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
  textSize(40)
  text("Happy Birthday!", 200, i);
}

/*
function message() {
  fill("blue")
  textFont(font1)
  textAlign(CENTER, CENTER)
  textSize(20)
  text("I hope you have a great day!", 200, (i+100));
}
*/