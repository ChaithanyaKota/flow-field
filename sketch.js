var inc = 0.05;
var scl = 10;

var cols, rows;
var zoff = 0;
var fr;


function setup() {
  createCanvas(400, 400);

  cols = floor(width / scl);
  rows = floor(height / scl);

  fr = createP('');
}

function draw() {
	background(255);

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;

    for (var x = 0; x < cols; x++) {
      var index = (x + y * width);

      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      
    //   v.setMag(1);
    //   flowfield[index] = v;
    //   xoff += inc;
    //   stroke(0, 50);

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();

      xoff += inc;
    }
    yoff += inc;

    zoff += 0.0003;
  }

  // for (var i = 0; i < particles.length; i++) {
  //   particles[i].follow(flowfield);
  //   particles[i].update();
  //   particles[i].edges();
  //   particles[i].show();
  // }

  fr.html(floor(frameRate()));
}


