import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

/** @param {string} input */
function part1(input) {
  const x = [];
  let count = 0;
  for (const letter of input) {
    count++;
    x.push(letter);

    // Check if we have a match
    if (x.length > 3) {
      if (new Set(x).size === 4) break;
      x.shift();
    }
  }
  return count;
}

/** @param {string} input */
function part2(input) {
  const x = [];
  let count = 0;
  for (const letter of input) {
    count++;
    x.push(letter);

    // Check if we have a match
    if (x.length > 13) {
      if (new Set(x).size === 14) break;
      x.shift();
    }
  }
  return count;
}

assert.strictEqual(part1(INPUT.TEST), 11);
console.log(`The result of part 1 is ${part1(INPUT.PROD)}`);

assert.strictEqual(part2(INPUT.TEST), 26);
console.log(`The result of part 2 is ${part2(INPUT.PROD)}`);
