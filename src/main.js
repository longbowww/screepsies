module.exports.loop = function () {
    Game.spawns['Gareth'].createCreep(['MOVE', 'WORK', 'HARVEST'], 'Alrik');
    Game.creeps.forEach(creep => {
        console.log(creep.name);
        console.log(creep.carry);
    })
};