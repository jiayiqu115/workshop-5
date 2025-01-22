let emojis = [];
let e1, e2, e3, e4;

function preload() {
  e1 = loadImage('gif/m1.GIF');
  e2 = loadImage('gif/m2.gif');
  e3 = loadImage('gif/m3.gif');
  e4 = loadImage('gif/m4.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  emojis.push(e1);
  emojis.push(e2);
  emojis.push(e3);
  emojis.push(e4);
  let button = createButton('click here');
  button.position(10, 10);
  button.mousePressed(() => {
    let r = random(emojis);
    image(r, random(width), random(height));
  });
}

function draw() {
}