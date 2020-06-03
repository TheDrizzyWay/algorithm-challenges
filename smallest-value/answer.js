const findSmallest = (test) => {
    const removeRepeated = [...new Set(test)];
    const removeNegatives = removeRepeated.filter(item => item > 0).sort();

    if (removeNegatives.length == 0) return 1;
    if (removeNegatives[0] > 1) return 1;

    const largest = Math.max(...removeNegatives);
    const smallest = Math.min(...removeNegatives);

    const largestValue = largest > 1000000 ? 999999 : largest;

    for(let i = smallest; i <= largestValue; i++) {
        if (!removeNegatives.includes(i + 1)) {
            return (i + 1);
        }
    }
};
