let particles = [];
let springs = [];
let spacing = 20;
let k = 0.01;

let gravity;

function setup() {
  createCanvas(400, 800);
  for (let i = 0; i < 20; i++) {
    particles[i] = new Particle(200, i * spacing);
    if (i !== 0) {
      let a = particles[i];
      let b = particles[i-1];
      let spring = new Spring(k, spacing, a, b);
      //console.log(spring);
      springs.push(spring);
    }
  }
  //console.log(springs)
  /*bob = new Particle(350, 300);
  anchor = new Particle(300, 0);
  spring = new Spring(0.01, 200, bob, anchor);*/
  gravity = createVector(0, 0.1);
}

function draw(){
  background(112, 50, 126);
  for(let s of springs) {
 
    s.update();
    s.show();
  }

  for (let p of particles) {
    p.update();
    p.show();
  }

  let tail = particles[particles.length-1];
  
  if (mouseIsPressed) {
    tail.position.set(mouseX, mouseY);
    tail.velocity.set(0,0);
  }
  
  /*
 //let x = y - restLength;
 // let force = -k * x;

  velocity.add(force);
  bob.add(gravity);
  bob.add(velocity);
 
  velocity.mult(0.99);*/

}