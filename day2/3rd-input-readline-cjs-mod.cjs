/* 3. Input with readline Common JS Module  CommonJS (Callback Pattern)*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
