import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

/** @param {string} input */
function part1(input) {
  return input
    .split("\n\n")
    .map((x) =>
      x
        .split("\n")
        .map(Number)
        .reduce((acc, curr) => acc + curr)
    )
    .sort((a, b) => b - a)
    .at(0);
}

/** @param {string} input */
function part2(input) {
  return input
    .split("\n\n")
    .map((x) =>
      x
        .split("\n")
        .map(Number)
        .reduce((acc, curr) => acc + curr)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr);
}

assert.strictEqual(part1(INPUT.TEST), 15);
console.log(`The result of part 1 is ${part1(INPUT.PROD)}`);

assert.strictEqual(part2(INPUT.TEST), 12);
console.log(`The result of part 2 is ${part2(INPUT.PROD)}`);
