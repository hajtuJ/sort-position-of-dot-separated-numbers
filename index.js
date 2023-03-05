export const sort = function(d) {
    return d.sort((a, b) => {
        // creating array of numbers for compared values
        const aPosArr = a.split('.').map(Number);
        const bPosArr = b.split('.').map(Number);

        // control number of index till which numbers are equal
        let l = 0; //equality index
        
        // getting smallest length of compared arrays
        const m = Math.min(aPosArr.length, bPosArr.length);

        // increasing equality index of value till numbers are different 
        // or we loop over all values of shortest array if all are equal 
        // (example: a = 1.2.3, b = 1.2.3.8)
        while (l < m && aPosArr[l] === bPosArr[l]) {
            l++;
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
        return l === m ? aPosArr.length - bPosArr.length : aPosArr[l] - bPosArr[l];
    });
}