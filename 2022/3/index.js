import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

const ALPHABET = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** @param {string} input */
function part1(input) {
  return input
    .split("\n")
    .flatMap((x) => {
      const [first, second] = [x.slice(0, x.length / 2), x.slice(x.length / 2)];
      let match = "";
      for (const letter of first) {
        if (second.includes(letter) && !match.includes(letter)) match += letter;
      }
      return ALPHABET.indexOf(match);
    })
    .reduce((acc, curr) => acc + curr);
}

/** @param {string} input */
function part2(input) {
  /** @type {string[][]} */
  const init = [];

  return input
    .split("\n")
    .reduce((acc, curr, index) => {
      const key = index % 3 === 0 ? acc.length : acc.length - 1;
      if (!acc[key]) acc[key] = [];
      acc[key].push(curr);
      return acc;
    }, init)
    .map(([first, second, third]) => {
      let match = "";
      for (const letter of first) {
        if (
          second.includes(letter) &&
          third.includes(letter) &&
          !match.includes(letter)
        )
          match += letter;
      }
      return ALPHABET.indexOf(match);
    })
    .reduce((acc, curr) => acc + curr);
}

assert.strictEqual(part1(INPUT.TEST), 157);
console.log(`The result of part 1 is ${part1(INPUT.PROD)}`);

assert.strictEqual(part2(INPUT.TEST), 70);
console.log(`The result of part 2 is ${part2(INPUT.PROD)}`);
