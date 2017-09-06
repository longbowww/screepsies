'use strict';

module.exports.loop = function () {
    var g = Game.spawns['Spawn1'];
    g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');

    Game.creeps.forEach(function (creep) {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
    });
};