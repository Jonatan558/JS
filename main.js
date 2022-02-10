const ages = [8, 13, 27, 30, 22, 40];

const sumOfAges = ages.reduce (function(age, accumulator) {
    return accumulator + age
}, 0);
console.log (sumOfAges);