console.log("Printing all numbers between -10 and 19:");
// let x = -10;
// while (x <= 19) {
//     console.log(x);
//     x++;
// }

for (let i = -10; i <= 19; i++) {
    console.log(i);
}

// ================================================================================================
console.log("Printing all evens between 10 and 40:");
// let y = 10;
// while (y <= 40) {
//     if (y % 2 === 0) {
//         console.log(y);
//     }
//     y++;
// }

for (let i = 10; i <= 40; i += 2) { // starts at even and +=2 so it prints all evens
    console.log(i);
}

// ================================================================================================
console.log("Printing all odds between 300 and 333:");
let z = 300;
while (z <= 333) {
    if (z % 2 === 1) {
        console.log(z);
    }
    z++;
}

for (let i = 300; i <= 333; i++) {
    if (i % 2 === 1)
        console.log(i);
}

// ================================================================================================
console.log("Printing all numbers divisible by 5 and 3 between 5 and 50:");
// let a = 5;
// while (a <= 50) {
//     if (a % 3 === 0 && a % 5 === 0) {
//         console.log(a);
//     }
//     a++;
// }
for (let i = 5; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}