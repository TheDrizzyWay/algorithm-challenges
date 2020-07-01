const numbers = [10, 15, 3, 7];
const k = 17;

for (let num of numbers) {
    const difference = k - num;
    if(numbers.includes(difference)) {
        return true;
    }
}

return false;
