/**
 * An Entity is an object that exists in the app
 * It has an init() function that is called on instantiation
 * It has an update() function that is called every render cycle
 **/
class Entity {
  constructor(init, update) {
    this.init = init;
    this.update = update;
  }
}

/**
 * An Actor is an object that exists in a Renderer
 * it has an HTML element that can be manipulated through functions
 **/
class Actor extends Entity {
  constructor(element, init, update, render) {
    super(init, update);

    //sets the HTML element
    this.element = element;
    this.render = render;
  }

  /**
   * Set the position of the actor
   **/
  setLocation(x, y) {
    //sets the variables
    this.x = x;
    this.y = y;

    //sets the element style properties
    this.element.style["top"] = y + "px";
    this.element.style["left"] = x + "px";
  }
}

/**
 * A Renderer is an object that manages the rendering
 * and updating of multiple Actors
 **/
class Renderer extends Entity {
  constructor(listOfActors) {
    super(function() {
      this.listOfActors.forEach(function(actor) {
        actor.init();
      });
    }, function() {});
    this.listOfActors = listOfActors;
  }

  /**
   * Sets the animation render settings based on animation properties
   **/
  initRender(fps) {
    //Variables to manage
    this.frameCount = 0;
    this.stop = false;
    // How many frames should run in a second(1000 miliseconds)
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.render();
  }

  render() {
    //If stop is true exit
    //if (this.stop) {
    //    console.log('stopped');
    //    return;
    //  }

    //Request a frame
    //console.log(this);
    window.requestAnimationFrame(this.render.bind(this));

    //Calculate elapsed time
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    //If enough time has elapsed, draw the next frame
    if (this.elapsed > this.fpsInterval) {
      //Reset then
      this.then = this.now - (this.elapsed % this.fpsInterval);

      //Call the render functions of all the Actors
      this.listOfActors.forEach(function(actor) {
        actor.render();
      });

      // TESTING...Report #seconds since start and achieved fps.
      let sinceStart = this.now - this.startTime;
      let currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
      document.getElementById("fps").innerHTML = ("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

    }
  }

}
