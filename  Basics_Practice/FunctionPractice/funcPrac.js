// Return if number is even
function isEven(num) {
    return num % 2 === 0;
}

// Return factorial of number
function factorial(num) {
    let sum = 1;

    while (num > 0) {
        sum *= num;
        num--;
    }
    return sum;
}

// Convert a kebab case string to snake case
// function kebabToSnake(kebab) {
//     let snake = "";

//     for (let i = 0; i < kebab.length; i++) {
//         let currChar = kebab.charAt(i);

//         if (currChar === "-")
//             snake = snake + "_";
//         else
//             snake = snake + currChar;
//     }

//     return snake;
// }

// Better version of above func using replace()
function kebabToSnake(str) {
    return str.replace(/-/g, "_"); // Repace - with _ using RegEx
}