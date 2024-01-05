function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0, 0);
  this.maxspeed = 2; 

  this.update = function() { 
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }

  this.applyForce = function(force) { 
    this.acc.add(force);
  }

  this.follow = function(vectors) { 
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);

    var idx = x + y * cols
    var force = vectors[idx];
    this.applyForce(force);
  }

  this.show = function() { 
    stroke(0);
    point(this.pos.x, this.pos.y);
    strokeWeight(3);
  }

  this.overflow = function() { 
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.y < 0) this.pos.y = height; 
    if(this.pos.y > height) this.pos.y = 0;
  }


}