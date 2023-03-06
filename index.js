export const sort = function(d) {
    return d.sort((a, b) => {
        // creating array of numbers for compared values
        const aPosArr = a.split('.').map(Number);
        const bPosArr = b.split('.').map(Number);

        // control number of index till which numbers are equal
        let differenceIndex = 0;
        
        // getting smaller length of compared arrays
        const lengthOfShorterPosition = Math.min(aPosArr.length, bPosArr.length);

        // increasing equality index of value till numbers are different 
        // or we loop over all values of shortest array if all are equal 
        // (example: a = 1.2.3, b = 1.2.3.8)
        while (differenceIndex < lengthOfShorterPosition && aPosArr[differenceIndex] === bPosArr[differenceIndex]) {
            differenceIndex++;
        }

        // checking we loop through whole shortest array values
            // if true
                // means longer position was equal on all indexes (always neg. value will be returned)
            // if false
                // means on some of value at index from range 0 to last index of shortest array was different
                // so we are checking which value at that position is smaller by subtraction 
                // we will return number 
                    // if b > a => negative 
                    // if a > b => positive
        return differenceIndex === lengthOfShorterPosition ? aPosArr.length - bPosArr.length : aPosArr[differenceIndex] - bPosArr[differenceIndex];
    });
}

export const bubbleSort = function (d) {
        for(let i = 0; i < d.length; i++){
            // Last i elements are already in place
            for(let j = 0; j < ( d.length - i -1 ); j++) {
                // Checking if the item at present iteration
                // is greater than the next iteration
                const aPosArr = d[j].split('.').map(Number);
                const bPosArr = d[j+1].split('.').map(Number);
                let differenceIndex = 0;
                const lengthOfShorterPosition = Math.min(aPosArr.length, bPosArr.length);

                while (differenceIndex < lengthOfShorterPosition && aPosArr[differenceIndex] === bPosArr[differenceIndex]) {
                    differenceIndex++;
                }

                let temp = d[j];
                if (differenceIndex !== lengthOfShorterPosition && aPosArr[differenceIndex] > bPosArr[differenceIndex]) {
                    d[j] = d[j + 1];
                    d[j+1] = temp;
                }
            }
        }
        return d;
}