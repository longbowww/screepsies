'use strict';

module.exports.loop = function () {
    var names = ['Alrik', 'Alrik2', 'Alrik3', 'Alrik4', 'Alrik5', 'Alrik6', 'Alrik7', 'Alrik8', 'Alrik9'];

    var g = Game.spawns['Spawn1'];
    console.log(Array.from(Game.spawns));

    g.createCreep([MOVE, WORK, CARRY], 'Alrik');

    var creepsies = [Game.creeps['Alrik']];

    creepsies.forEach(function (creep) {
        if (creep) {
            console.log(creep.name);
            console.log(creep.carry);
            console.log(creep.carryCapacity);
            console.log(creep.id);
            console.log(Game.time);
        }
    });
};