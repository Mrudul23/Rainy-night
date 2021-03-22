class Drop{
  constructor(x,y){
    var options = { 
    'restitution':0.1,
    'friction':0.2
    }
          
    this.body = Bodies.circle(x,y,10,options);
    this.radius = 14;
    World.add(world,this.body);
    this.image = loadImage("Drop.png")
    }
   
  changePosition(){
    if(this.body.position.y>650){
        Matter.Body.setPosition(this.body,{x: random(0,400),y: random(-10,0)})
    }
   }
  
 display(){
  strokeWeight(1);
  stroke("blue");
  fill("blue");
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.radius-6,this.radius);
 }
}