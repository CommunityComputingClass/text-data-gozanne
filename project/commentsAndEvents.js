let myQuestion = "When is your birthday?"
let textDefault = "Type here"


let contents = "";
let all_the_answers = []

let saveButton; 
let showAnswers_button;
let textBox; 

function setup() {
  createCanvas(400, 400);
  saveButton = createButton("save your answer");
  saveButton.position(50,300)
  saveButton.mousePressed(saveText)
  
  showButton= createButton("see the answers");
  showButton.position(250,300)
  showButton.mousePressed(showAnswers);
  
  
  textBox = createInput(textDefault)
  textBox.size(200,40)
  textBox.position(50,100)
  textBox.input(storeText)
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50) 
}

function draw() {  
}

function saveText(){
   all_the_answers.push(contents);
   contents = "" ;
   textBox.value(textDefault)
   print(all_the_answers)   
}

function storeText(){
  contents = this.value(); 
}

function showAnswers(){
  
  textBox.hide();
  saveButton.hide();
  showButton.hide();
  
  textSize(14);
  fill("pink");    
  text(all_the_answers[0],50,100);
  for (let i in all_the_answers) {
    text(all_the_answers[i],50,(100 + (20*i)))
  }
    
}

function keyPressed(){
  if (keyCode === ENTER) {
    saveText()
  }
}

