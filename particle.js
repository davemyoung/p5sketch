// a simple particle class

class Particle {
	constructor(x, y) {
		this.acceleration = createVector(0, 0.0);
		this.velocity = createVector(0, 0);
		this.position = createVector(x, y);
		this.mass = 1;
	}
  
  applyForce(force) {
  	let f = force.copy();
  	f.div(this.mass);
  	this.acceleration.add(f);
  }
	// Method to update position
  update() {
  	this.velocity.mult(0.9999);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    stroke(255);
    strokeWeight(2);
    fill(45, 197, 244);
    ellipse(this.position.x, this.position.y, 16, 16);
  }
}