let x = 0;
let y = 0;
let z = 0;
let angle = 0;
let button;
let particles;
let colorPaletteR = [100, 255, 126, 170, 113];
let colorPaletteG = [158, 204, 153, 155, 119];
let colorPaletteB = [242, 105, 191, 126, 128];

stroke(255, 255, 255);
stroke(25);
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  button = createButton('Reset');
  button.mousePressed(resetModel);
  resetModel();
}

function draw() {

  x = map(sin(angle), -1, 1, 0, 255);
  y = map(cos(angle), -1, 1, 0, 255);
  z = map(sin(angle * 1.5), -1, 1, 0, 255);
  background(x, y, z);

  lights();

  orbitControl();

  noStroke();

  angle += 0.01;

  model(particles);

}

function resetModel(){

  if(particles){
    freeGeometry(particles);
  }

  particles = buildGeometry(createParticles);

}

function createParticles(){

  //let paletteIndex = floor(random(0, 5));

  for(let i = 0; i < 1000; i += 1){

    let a = randomGaussian(0, random(100, 1500));
    let b = randomGaussian(0, random(100, 1500));
    let c = randomGaussian(0, random(100, 1500));
    let paletteIndex = floor(random(0, 5));

    push();

    translate(a, b, c);

    fill(colorPaletteR[(paletteIndex)], colorPaletteG[(paletteIndex)], colorPaletteB[(paletteIndex)]);
    ellipsoid(random(10, 100), random(10, 100), random(10, 100), 16, 10);
    
    pop();

  }
}


