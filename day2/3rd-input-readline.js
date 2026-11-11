/* 3. Input with readline */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

/* 3. Input with readline */

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

/* 3. Input with readline (Promises) */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const name = await rl.question("Your name? ");
console.log(`Hello, ${name}!`);

rl.close();
