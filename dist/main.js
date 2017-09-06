'use strict';

module.exports.loop = function () {
    var names = ['Alrik', 'Alrik2', 'Alrik3', 'Alrik4', 'Alrik5', 'Alrik6', 'Alrik7', 'Alrik8', 'Alrik9'];

    for (var creep in Game.creeps) {
        var c = Game.creeps[creep];
        console.log(c.name);
        console.log(c.carry);
        console.log(c.carryCapacity);
        console.log(c.id);
        console.log(Game.time);
    }
};