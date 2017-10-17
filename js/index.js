let viewer = document.getElementById('viewer');
let box1 = new Actor(document.createElement("div"), function() {
  this.element.style.height = '100px';
  this.element.style.width = '100px';
  this.element.style["background-color"] = 'blue';
  this.element.style["position"] = 'absolute';
  this.element.style["top"] = "0px";
  this.element.style["left"] = "0px"

  viewer.appendChild(this.element);
  console.log("called init()")
  this.x = 100;
  this.y = 100;
  this.vx = 2.5;
  this.vy = 2.5;
}, function() {}, function() {
  this.setLocation(this.x + this.vx, this.y + this.vy);

  if (this.x > window.innerWidth-100) {
    this.vx *= -1;
    console.log("HIT!");
  } else if (this.x < 0) {
    this.vx *= -1
    console.log("HIT!");
  };

  if (this.y > window.innerHeight-100) {
    this.vy *= -1;
    console.log("HIT!");
  } else if (this.y < 0) {
    this.vy *= -1
    console.log("HIT!");
  };
});

let box2 = new Actor(document.createElement("div"), function() {
  this.element.style.height = '100px';
  this.element.style.width = '100px';
  this.element.style["background-color"] = 'red';
  this.element.style["position"] = 'absolute';
  this.element.style["top"] = "0px";
  this.element.style["left"] = "0px"

  viewer.appendChild(this.element);
  console.log("called init()")
  this.x = 500;
  this.y = 500;
  this.vx = 2.5;
  this.vy = 2.5;
}, function() {}, function() {
  this.setLocation(this.x + this.vx, this.y + this.vy);

  if (this.x > window.innerWidth-100) {
    this.vx *= -1;
    console.log("HIT!");
  } else if (this.x < 0) {
    this.vx *= -1
    console.log("HIT!");
  };

  if (this.y > window.innerHeight-100) {
    this.vy *= -1;
    console.log("HIT!");
  } else if (this.y < 0) {
    this.vy *= -1
    console.log("HIT!");
  };
});

let renderer = new Renderer([box1,box2]);
renderer.init();
renderer.initRender(60);
