'use strict';

module.exports.loop = function () {
    Game.spawns('Gareth').createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');
    console.log(JSON.stringify(Game.creeps));
};