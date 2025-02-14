let myQuestion = "When is your birthday?"
let textDefault = ""

let contents = "";
let all_the_answers = []

let saveButton; 
let showAnswers_button;
let textBox; 

function deleter() {
    //all_the_answers.pop
}

class response {
    constructor(id, input) {
        this.id = id
        this.x = 50;
        this.y = 50 + (20*id);
        this.text = input

        let deleteButton
        deleteButton = createButton("delete")
        deleteButton.position((this.x + 50), this.y)
        deleteButton.mousePressed(deleter)
    }

    render() {
        textSize(14);
        fill("pink");
        text(this.text, this.x, this.y)
        deleteButton.show()
    }
    
    
}

function setup() {
    createCanvas(400, 400);
    saveButton = createButton("save your answer");
    saveButton.position(50,300)
    saveButton.mousePressed(saveText)

    showButton = createButton("see the answers");
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
    all_the_answers.push(new response(all_the_answers.length, contents));
    contents = "" ;
    textBox.value(textDefault)
    //print(all_the_answers)   
}

function storeText(){
    contents = this.value(); 
}

function showAnswers(){
    background(50)
    textBox.hide();
    saveButton.hide();
    showButton.hide();
  
    textSize(14);
    fill("pink");    
    text("Responses:",50,30);
    for (let i in all_the_answers) {
        all_the_answers[i].render()
    }
}

function keyPressed(){
    if (keyCode === ENTER) {
        saveText()
    }
}

