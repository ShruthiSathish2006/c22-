
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine,
 World = Matter.World,
 Bodies = Matter.Bodies;
 


 var box1 = [];
 var particle = [];
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;

 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,350,400,20)
}
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
       box1.push(new Box(mouseX,mouseY,random(10,50),random(20,80)));
       particle.push(new Particle(mouseX, mouseY,random(30,40)));
       
    }
    console.log(box1)
}

 
function draw() {
    // Draw all the elements including the slider that 
    background(51);
    Engine.update(engine);
    ground.display();
    
    
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for(var i=0;i<box1.length;i++){
        box1[i].display()
        particle[i].display()
    }
    
    }

 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
