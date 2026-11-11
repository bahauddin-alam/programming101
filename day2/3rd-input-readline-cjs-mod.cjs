/* 3. Input with readline Common JS Module*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
