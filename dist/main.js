'use strict';

module.exports.loop = function () {
    var g = Game.spawns['Spawn1'];
    g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');

    var creepsies = [Game.creeps['Alrik']];

    creepsies.forEach(function (creep) {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
        console.log(Game.time);
    });
};