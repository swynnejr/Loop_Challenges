// Print odd numbers from 1 - 20

for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Print multiples of 3, starting at 100 donw to 0

for (let i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Print sequence using funky sentry movement passing through 0

for (let i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

// Print sum of integers between 1 - 100

var sum = 0

for (let i = 1; i < 101; i++) {
    sum += i
}
console.log(sum)

// Factorial !12: Print the product of all the values from 1 -12

var product = 1

for (let i = 1; i < 13; i++) {
    product *= i
}
console.log(product)

