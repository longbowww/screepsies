module.exports.loop = function () {
    const names = [
        'Alrik',
        'Alrik2',
        'Alrik3',
        'Alrik4',
        'Alrik5',
        'Alrik6',
        'Alrik7',
        'Alrik8',
        'Alrik9'
    ];
    
    let g = Game.spawns['Spawn1'];
    console.log(Array.from(Game.spawns));
    
    g.createCreep([MOVE, WORK, HARVEST], 'Alrik');
    
    let creepsies = [Game.creeps['Alrik']];
    
    creepsies.forEach(creep => {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        console.log(creep.id);
        console.log(Game.time);
        
    });
};