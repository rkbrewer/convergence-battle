/*
 Multiplayer:
 0. A player pushes Start on Client (sends signal to webserver, joining them to a lobby)
 1. A player waits in a lobby (in debug/admin mode I list all players in the lobby)
 2. Once 2 players join, the server-app selects 2 players and creates an arena-engine instance
 3. Battle starts, input is relayed to server over websockets...?

 I'll have to test this.  Phase 1, get a single player, local engine to work.
 Phase 2, put the engine on a webserver and update bodies over websockets.

 Firebase will be my db. My frontend/backend can both talk to it.
 Something else will host my node app.  now? Yes, use Now.
 My server app should be ... express + express-ws (websockets). No just try sails.





 Multiplayer:
 Server gets 2 people in a lobby, connected via websockets, then broadcasts a signal to each of them
 telling them to start-your-engines.

 Each client has a websocket connection to each players ships, and the server relays messages back and forth.
 Each players ship has an id: ship1, ship2.  The server sends messages back and forth.

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


