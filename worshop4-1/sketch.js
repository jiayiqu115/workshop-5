let input;
let submitButton;
let greeting;
let listInputs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 输入框
  input = createInput();
  input.position(100, 100);
  submitButton = createButton('submit');
  // 将提交按钮放在输入框旁边
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(submitInput);
  // 创建一个二级标题
  greeting = createElement('h2', 'Please write your question.');
  greeting.style('color', 'black');
  // 将标题放在输入框上方
  greeting.position(input.x, input.y - 50);
}

function submitInput() {
  let userInput = input.value();
  input.value(''); // 将输入值重置为空字符串
  listInputs.push(userInput);
  if (listInputs.length > 10) {
    listInputs.shift();
  }
}

function draw() {
  background(220);
  for (let x = 0; x < listInputs.length; x++) {
    text(listInputs[x], 20, 180 + x * 20);
  }
}