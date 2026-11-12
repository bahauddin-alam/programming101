/* 4. Input with readline ES Module ES Module (Callback Pattern)*/

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
