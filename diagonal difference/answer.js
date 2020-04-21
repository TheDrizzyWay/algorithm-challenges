function diagonalDifference(arr) {
   const arrLength = arr[0].length;
    let primaryDiag = [];
    let secondaryDiag = [];

    for(let i = 0; i < arrLength; i++) {
        primaryDiag.push(arr[i][i]);
        secondaryDiag.push(arr[i][arrLength - (i + 1)]);
    }
 
    const primarySum = primaryDiag.reduce((a, b) => a + b, 0);
    const secondarySum = secondaryDiag.reduce((a, b) => a + b, 0);

    if(primarySum > secondarySum) return primarySum - secondarySum;
    return secondarySum - primarySum;
}
