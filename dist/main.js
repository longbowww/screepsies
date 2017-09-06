'use strict';

module.exports.loop = function () {
    var names = ['Alrik', 'Alrik2', 'Alrik3', 'Alrik4', 'Alrik5', 'Alrik6', 'Alrik7', 'Alrik8', 'Alrik9'];

    var g = Game.spawns['Spawn1'];

    g.createCreep([MOVE, WORK, CARRY], 'Alrik');

    var creepsies = [Game.creeps['Alrik']];

    for (var creep in Game.creeps) {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
        console.log(Game.time);
    }
};