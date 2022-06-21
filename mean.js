let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.splice(zero, my.length, '"Elzero"');
console.log(my.join() + my.split(""));
console.log(my.slice(my.indexOf("Mazero"), counter));

console.log(my.reverse());
