let viewer = document.getElementById('viewer');

let actor = new Actor(function() {
    this.element = document.createElement("div");
    this.element.style["background-color"] = 'blue';
    this.element.style.height = '100px';
    this.element.style.width = '100px';
    this.element.style.position = 'absolute';
    this.x = 10;
    viewer.appendChild(this.element);
  }, function() {
    let e = this.element;
    setInterval(() => {
      if (this.x < window.innerWidth - 100) {
        slide(e, this.x);
        this.x += 0.5;
      }
    }, 1);
    setInterval(() => {
      changeColors(e);
    }, 1000);
  },
  null);

actor.callSequence();

function changeColors(e) {
  //console.log(e);
  if (e.style["background-color"] == 'red') {
    e.style["background-color"] = 'blue';
  } else {
    e.style["background-color"] = 'red';
  }
}

function slide(e, x) {
  //console.log(e.style["left"]);
  e.style["left"] = x + "px";
}
