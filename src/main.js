module.exports.loop = function () {
    let g = Game.spawns['Spawn1'];
    g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');
    
    Game.creeps.forEach(creep => {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
        console.log(Game.time);
    });
};