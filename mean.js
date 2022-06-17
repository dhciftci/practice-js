let job = "manager";
let salary = 0;
switch (job) {
  case "manager":
    salary = 8000;
    console.log(`salary is ${salary}`);
    break;
  case "it":
  case "support":
    salary = 6000;
    console.log(`salary is ${salary}`);
    break;
  case "developer":
  case "degisner":
    salary = 7000;
    console.log(`salary is ${salary}`);
  default:
    salary = 4000;
    console.log(`salary is ${salary}`);
}

let holdiday = 0;
let money = 0;
if (holdiday === 0) {
  money = 5000;
  console.log(`my money is${money}`);
} else if (holdiday === 1 || holdiday === 2) {
  money = 3000;
  console.log(`my money is${money}`);
} else if (holdiday === 3);
{
  money = 2000;
  console.log(`my money is${money}`);
}
