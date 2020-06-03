const findHighest = (letters) => {
    const stringArray = letters.split('');
    const stringArrayFiltered = [...new Set(stringArray)];
    stringArrayFiltered.forEach(item => {
        if (stringArrayFiltered.includes(item.toUpperCase()) && stringArrayFiltered.includes(item.toLowerCase())) {
            repeated.push(item.toUpperCase());
        }
    });
    
    if (repeated.length < 1) {
        return "NO";
    }
    repeated = [...new Set(repeated)];

    return repeated.sort().pop();
};

console.log(findHighest(letters));