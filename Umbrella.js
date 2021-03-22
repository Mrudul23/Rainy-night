class Umbrella{
    constructor(x,y){
     var options={ 
     'isStatic': true
     }

     this.body = Bodies.circle(x,y,50,options);
     this.radius = 50;
     this.image = loadAnimation("Man/Man (1).png","Man/Man (2).png","Man/Man (3).png",
     "Man/Man (4).png","Man/Man (5).png","Man/Man (6).png","Man/Man (7).png");
     World.add(world,this.body);
    }
 
    display(){
     var pos = this.body.position;
     imageMode(CENTER);
     animation(this.image,pos.x,pos.y+70);
    }
}