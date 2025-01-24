let emojis = ['🍎', '🍌', '🍇', '🍉']; 
let positions = []; 
let slider;
let checkbox;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('Generate Emoji');
  button.position(20, 20);
  button.style('padding', '10px 20px');
  button.style('font-size', '16px');
  button.style('background-color', '#007BFF');
  button.style('color', '#fff');
  button.style('border', 'none');
  button.style('border-radius', '5px');
  button.mousePressed(() => {
    let emoji = random(emojis);
    let x = random(50, width - 50); 
    let y = random(50, height - 50);
    positions.push({ emoji, x, y }); 
  });

  slider = createSlider(50, 255, 255);
  slider.position(20, 70);
  slider.style('width', '200px');

  checkbox = createCheckbox('Dark Mode', false);
  checkbox.position(20, 110);
  checkbox.style('font-size', '16px');
}

function draw() {
  if (checkbox.checked()) {
    background(30);
  } else {
    background(225);
  }
  let alphaValue = slider.value();
  textSize(48); // 设置 Emoji 字号
  textAlign(CENTER, CENTER);
  for (let i = 0; i < positions.length; i++) {
    let { emoji, x, y } = positions[i];
    fill(255, alphaValue);
    text(emoji, x, y); // 绘制 Emoji
  }
}
