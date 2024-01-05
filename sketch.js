var inc = 0.1;
var scl = 10;

var cols, rows;
var zoff = 0;
var fr;

var particles = [];
var flowfield = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(rows * cols);

  fr = createP("");
  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }

}

function draw() {
  background(255);

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;

    for (var x = 0; x < cols; x++) {

      var idx = (x + y * cols);

      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

      var v = p5.Vector.fromAngle(angle);

      v.setMag(0.75);
      flowfield[idx] = v;

      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1)
      // line(0, 0, scl, 0);
      // pop();

      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].overflow();
  }

  fr.html(floor(frameRate()));
}
