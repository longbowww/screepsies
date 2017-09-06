'use strict';

module.exports.loop = function () {
    var g = Game.spawns['Gareth'];
    g ? g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik') : Game.spawns[0].name = 'Gareth';

    Game.creeps.forEach(function (creep) {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
    });
};