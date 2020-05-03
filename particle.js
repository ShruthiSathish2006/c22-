class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0.3,
          restitution: 1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.r);
      pop();
    }
  };