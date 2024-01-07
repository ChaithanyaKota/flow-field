function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0, 0);
  this.maxspeed = 1;
  this.prevPos = this.pos.copy();
  this.clr = 0;

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);

    var idx = x + y * cols;
    var force = vectors[idx];
    this.applyForce(force);
  };

  this.show = function () {
    
    stroke(this.clr, 255, 255, 25);
    this.clr = this.clr + 1;

    if (this.clr > 255) {
      this.clr = 0;
    }
    
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);

    this.updatePrev();
  };  

  this.updatePrev = function() { 
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  } 

  this.overflow = function () {
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();

    }
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
  };
}
