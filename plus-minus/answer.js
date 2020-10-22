//permute function sourced from https://gist.github.com/customcommander/e9af9da584ff3a33f5ed
const permute = (str) => {
  const ret = [];

  if (str.length == 1) return [str];
  if (str.length == 2) return [str, str[1]+str[0]];

  str.split('').forEach((chr, idx, arr) => {
    const sub = [].concat(arr); // "clone" arr
    sub.splice(idx, 1);
    permute(sub.join('')).forEach((perm) => {
      ret.push(chr + perm);
    });
  });

  return ret;
};

const summation = (firstDigit, secondDigit, operation) => {
  if(operation == '+') {
    return Number(firstDigit) + Number(secondDigit);
  } else {
    return Number(firstDigit) - Number(secondDigit);
  }

};

const plusMinus = (digits) => {
  const arrayOfDigits = digits.toString().split('');
  const arrayOfSigns = [];
  const arrayOfSignsNegative = [];
  const arrayOfSignsExtended = [];
  const solution = [];
  
  for(let i = 0; i < arrayOfDigits.length; i++) {
    if((i == 0) || (i % 2 == 0)) {
      arrayOfSigns.push('+');
      arrayOfSignsNegative.push('-')
    } else {
      arrayOfSigns.push('-');
      arrayOfSignsNegative.push('+');
    }
  }

  arrayOfSigns.pop();
  arrayOfSignsNegative.pop();

  const positiveString = arrayOfSigns.join('');
  const negativeString = arrayOfSignsNegative.join('');

  const positivePermutations = [...new Set(permute(positiveString))];
  const negativePermutations = [...new Set(permute(negativeString))];
  
  const totalPermutations = [...positivePermutations, ...negativePermutations];
  const filteredPermutations = [...new Set(totalPermutations)];


  filteredPermutations.forEach(perm => {
    const permArray = perm.split('');
    for(let i = 0; i < perm.length; i++) {
      let tempArray = [].concat(permArray);
      tempArray[i] = '+';
      arrayOfSignsExtended.push(tempArray.join(''));
    }

    for(let i = 0; i < perm.length; i++) {
      let tempNegativeArray = [].concat(permArray);
      tempNegativeArray[i] = '-';
      arrayOfSignsExtended.push(tempNegativeArray.join(''));
    }
  });

  const filteredExtended = [...new Set(arrayOfSignsExtended)];
  const combinedPermutations = filteredPermutations.concat(filteredExtended);
  const filteredCombined = [...new Set(combinedPermutations)];
  
  filteredCombined.forEach(perm => {
    let result;
    for(let i = 0; i < (arrayOfDigits.length); i++) {
      if(i == 0) {
        result = 0 + Number(arrayOfDigits[i]);
      } else {
        result = summation(result, arrayOfDigits[i], perm[i - 1]);
      }
    }

    if(result == 0) {
      solution.push(perm);
    }
  });

  return solution.length == 0 ? 'Not possible' : solution;

};

console.log(plusMinus(26712));
