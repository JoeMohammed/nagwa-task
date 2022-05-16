{/* Write a function to find non-repetitive numbers, that are only once in a given array.
Input: [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
Output: [9, 1] */}

let arr = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]

function outPut () {
    let minNum = Math.min(arr);
    let maxNum = Math.max(arr);
    
    let final = [minNum, maxNum]
    console.log(final)
    return final
}
outPut();