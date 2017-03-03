/*

 Firebase will be my db. My frontend/backend can both talk to it.
 Something else will host my node app.  now? Yes, use Now.


 Multiplayer:
 Server gets 2 people in a lobby, connected via websockets, then broadcasts a signal to each of them
 telling them to start-your-engines. In this approach the server is never running a simulation, rather it
 acts as a message bus between client-simulations, signaling simulations to start/stop and each player's input.

 Each client has a websocket connection to arena inputs, and the server relays messages back and forth.
 Each players ship has an id: playerOneUid, playerTwoUid.

 example:
 /input sends {
   'playerOneId': {
     pressure: 0.1,
     rotation: -10.00303,
     weapon: true
    },
    'playerTwoId': {
      pressure: 0.1,
      rotation: -30.023,
      weapon: true
    }
  }
  this can be shrunk by making keys p,r,w, and booleans 0 or 1
 */

module.exports = {
  spawnPoints() {
    return {
      playerOne: [100, 100],
      playerTwo: [400, 400],
      planet: [100, 100]
    };
  }
};


