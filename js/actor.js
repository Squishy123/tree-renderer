class Actor {
  constructor(init, update, render) {
    this.init = init;
    this.update = update;
    this.render = render;
  }

  callSequence() {
    this.init();
    this.update();
  }

  render() {
    this.render();
  }
}

function add(a, b) {
  a();
  b();
}
