'use strict';

module.exports.loop = function () {
    Game.spawns['Gareth'].createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');
    Game.creeps.forEach(function (creep) {
        console.log(creep.name);
        console.log(creep.carry);
    });
};