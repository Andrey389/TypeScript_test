import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

let result = sayHello("John");

function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}
