function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) // loop starts at end of arr
        console.log(arr[i]);

}

// Return true if all elements of the arrat are the same and flse otherwise

// This implementation is buggy
// function isUniform(arr) {
//     const firstEle = arr[0];
//     console.log(firstEle);

//     arr.forEach(function(ele) {
//         if (ele !== firstEle) {
//             return false;       // logic is correct but we only return false in the callback function, not in the broader isUniform()
//         }

//     })
//     return true;
// }

// Using a tradiional for loop is better in this case
function isUniform(arr) {
    const firstEle = arr[0]

    for (let i = 0; i < arr.length; i++)
        if (arr[i] !== firstEle)
            return false;

    return true;
}

// Return the sum of the elements in the array
function sumArray(arr) {
    let sum = 0;

    arr.forEach(function(ele) {
        sum += ele;
    });

    return sum;
}

// Retrun max num in array
function max(arr) {
    let currMax = arr[0];

    arr.forEach(function(ele) {
        if (ele > currMax)
            currMax = ele;
    });

    return currMax;
}