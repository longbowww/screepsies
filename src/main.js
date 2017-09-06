module.exports.loop = function () {
    let g = Game.spawns['Gareth'];
    g ? g.createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik') : Game.spawns[Game.spawns.keys()[0]].name = 'Gareth';
    
    Game.creeps.forEach(creep => {
        console.log(creep.name);
        console.log(creep.carry);
        console.log(creep.carryCapacity);
        
    });
};