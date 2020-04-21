const braces = "({[()]})]";

const bracesArray = braces.split("");
let result;

const findClosed = (arrayOfBraces) => {
    let prevLength = arrayOfBraces.length;
    
    if (prevLength == 0) {
        return result = true;
    }

    arrayOfBraces.forEach((brace, i) => {
        switch (brace) {
            case "(":
                if(arrayOfBraces[i + 1] == ")") {
                    delete arrayOfBraces[i];
                    delete arrayOfBraces[i + 1];
                }
                break;
            case "[":
                if(arrayOfBraces[i + 1] == "]") {
                    delete arrayOfBraces[i];
                    delete arrayOfBraces[i + 1];
                }
                break;
            case "{":
                if(arrayOfBraces[i + 1] == "}") {
                    delete arrayOfBraces[i];
                    delete arrayOfBraces[i + 1];
                }
                break;
            default:
                break;
        }
    });

    let newBracesArray = arrayOfBraces.filter(brace => !!brace);

    if (prevLength == newBracesArray.length) {
        return result = false;
    } else {
        findClosed(newBracesArray);
    }
};

findClosed(bracesArray);
console.log(result);
