module.exports.loop = function () {
    let g = Game.spawns['Spawn1'];
    g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');
    
    let creepsies = [Game.creeps['Alrik']];
    
    creepsies.forEach(creep => {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
        console.log(Game.time);
        
    });
};