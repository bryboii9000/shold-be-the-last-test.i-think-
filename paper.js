class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = 10     
      World.add(world, this.body);
     
     // this.image = loadImage("sprites/base.png");
    };
    display(){
      
      var  paperpos = this.body.position

      push();
      translate(paperpos.x,paperpos.y);
      ellipseMode(RADIUS);
      
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(0,0,this.radius*2)
      pop();
    };
  };
  //rotate(angle);
  //image(this.image ,0, 0, this.width, this.height);