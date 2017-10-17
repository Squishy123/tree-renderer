class Renderer {
  constructor(preload, init, update) {
    this.preload = preload;
    this.init = init;
    this.update = update;
  }

  callSequence() {
    preload();
    init();
  }
}
