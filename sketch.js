const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thunder, thunder1, thunder2, thunder3, thuder4;
var thunderSound
var umbrella;
var maxDrops = 150;
var drops = [];
var rand;
var thunderCreatedFrame = 0;
var lightframe = 0
var light,lightImage,lightGroup,moonImage

function preload(){
    thunder1 = loadImage("Thunder/thunder1.png");
    thunder2 = loadImage("Thunder/thunder2.png");
    thunder3 = loadImage("Thunder/thunder3.png");
    thunder4 = loadImage("Thunder/thunder4.png");
    lightImage = loadImage("Light.png");
    moonImage = loadImage("moonImage.png")
    thunderSound = loadSound("Thunder sound.mp3")
}

function setup(){
    canvas = createCanvas(420,650);
        
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,450);

    if(frameCount % 150 === 0){
     for(var i=0; i<maxDrops; i++){
       drops.push(new Drop(random(0,400), random(0,400)));
      }
     }
     lightGroup = createGroup()
}

function draw(){
    background(0);
    Engine.update(engine);
    rand = Math.round(random(1,4));

    if(frameCount % 100===0){
        thunderCreatedFrame =  frameCount;
        thunder = createSprite(random(10,370),100);
        thunderSound.play()
        switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break; 
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
        }
        thunder.scale = random(0.5,0.7)
    }
        
    if(thunderCreatedFrame + 20 === frameCount && thunder){
       thunder.destroy();
    }

    if(frameCount % 144 === 0){
        lightframe = frameCount
        light = createSprite(430,500)
        light.scale = 1.2
        light.velocityX = -3
        light.addImage(lightImage)
        lightGroup.add(light)
        lightGroup.setLifetimeEach(143)
    }

    umbrella.display();

    for(var i = 0;i < maxDrops; i++){
      drops[i].display();
      drops[i].changePosition();
    }

    image(moonImage,370,70,180,200)
    drawSprites();
} 