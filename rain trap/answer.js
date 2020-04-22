const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const tank = [];
let units = 0;

const maxHeight = Math.max(...heights);

for(let i = 0; i < maxHeight; i++) {
    tank.push([]);
}

for (let i = 0; i < tank.length; i++) {
    heights.forEach(height => {
        height > i ? tank[i].push(1) : tank[i].push(0);
    });
}

tank.forEach(tankArray => {
    let filtered;
    const leftIndex = tankArray.findIndex(i => i == 1);
    const rightIndex = tankArray.lastIndexOf(1);
    filtered = tankArray.slice(leftIndex, rightIndex + 1).filter(i => i == 0);
    units += filtered.length;
});

console.log(units);
