import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

/** @param {string} input */
function part1(input) {
  return input
    .split("\n")
    .map((x) => {
      const [a, b] = x.split(",");
      const [a1, a2] = a.split("-").map(Number);
      const [b1, b2] = b.split("-").map(Number);
      if (a1 >= b1 && a2 <= b2) return 1;
      if (b1 >= a1 && b2 <= a2) return 1;
      return 0;
    })
    .reduce((acc, curr) => acc + curr);
}

/** @param {string} input */
function part2(input) {
  return input
    .split("\n")
    .map((x) => {
      const [a, b] = x.split(",");
      const [a1, a2] = a.split("-").map(Number);
      const [b1, b2] = b.split("-").map(Number);
      if (a1 >= b1 && a2 <= b2) return 1;
      if (a2 >= b1 && a2 <= b2) return 1;
      if (b1 >= a1 && b2 <= a2) return 1;
      if (b2 >= a1 && b2 <= a2) return 1;
      return 0;
    })
    .reduce((acc, curr) => acc + curr);
}

assert.strictEqual(part1(INPUT.TEST), 2);
console.log(`The result of part 1 is ${part1(INPUT.PROD)}`);

assert.strictEqual(part2(INPUT.TEST), 4);
console.log(`The result of part 2 is ${part2(INPUT.PROD)}`);
