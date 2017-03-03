import {Engine, Render, World, Bodies} from 'matter-js';

// Create an engine
const engine = Engine.create();
Engine.run(engine);

// Callback for when sails signals the game can start. For timing enhancement, mabye break this into 2 signals: create & start.
function createAndStart({playerOne, playerTwo, planet}) {

  // How will each client know they are player one or two?  The server will send id's down, that the client must match.
  const playerShip = Bodies.rectangle(...playerOne, 80, 80);
  const enemyShip = Bodies.rectangle(...playerTwo, 80, 80);
  const planetBody = Bodies.rectangle(...planet, 80, 80, {isStatic: true});

  World.add(engine.world, [playerShip, enemyShip, planetBody]);

  // Create a renderer (do this on the client)
  Render.run(
    Render.create({
      element: document.body,
      engine,
      options: {
        wireframes: false
      }
    })
  );

  // Return the body so the player so the controller lib can manipulate it. (do this clientside)
  return playerShip;
}

// Callback for when a client disconnects
function stop() {

}

export {
  createAndStart,
  stop
};
