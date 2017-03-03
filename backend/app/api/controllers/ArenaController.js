/**
 * ArenaController
 *
 * @description :: Server-side logic for managing arenas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	start(req, res) {
    return res.send(ArenaService.spawnPoints());
  }
};

