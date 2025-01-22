let emojis = [];
    let e1, e2, e3, e4;
    let slider;
    let checkbox;

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
        r.x = random(width);
        r.y = random(height);
        image(r, r.x, r.y);
      });
      slider = createSlider(0, 255, 255);
      slider.position(100, 350);
      slider.size(200);
      checkbox = createCheckbox();
      checkbox.position(200, 150);
    }

    function draw() {
      if (checkbox.checked()) {
        background(0);
      } else {
        background(225);
      }
      let alphaValue = slider.value();
      for (let i = 0; i < emojis.length; i++) {
        if (emojis[i].x!== undefined && emojis[i].y!== undefined) {
          tint(255, alphaValue);
          image(emojis[i], emojis[i].x, emojis[i].y);
        }
      }
    }