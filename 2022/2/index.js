import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

/** @param {string} input */
function part1(input) {
  return input
    .split("\n")
    .map((x) => {
      const [, b] = x.split(" ");
      let score = 0;

      switch (b) {
        case "X":
          score = 1;
          break;
        case "Y":
          score = 2;
          break;
        case "Z":
          score = 3;
          break;
      }

      if (["A Y", "B Z", "C X"].includes(x)) return (score += 6);
      if (["A Z", "B X", "C Y"].includes(x)) return (score += 0);
      if (["A X", "B Y", "C Z"].includes(x)) return (score += 3);

      throw new Error("Unreachable");
    })
    .reduce((acc, curr) => acc + curr);
}

/** @param {string} input */
function part2(input) {
  return input
    .split("\n")
    .map((x) => {
      const [a, b] = x.split(" ");
      let score = 0;

      switch (b) {
        case "X": // X - LOSE
          if (a === "A") score = 3;
          if (a === "B") score = 1;
          if (a === "C") score = 2;
          score += 0;
          break;
        case "Y": // DRAW
          if (a === "A") score = 1;
          if (a === "B") score = 2;
          if (a === "C") score = 3;
          score += 3;
          break;
        case "Z": // WIN
          if (a === "A") score = 2;
          if (a === "B") score = 3;
          if (a === "C") score = 1;
          score += 6;
          break;
      }

      return score;
    })
    .reduce((acc, curr) => acc + curr);
}

assert.strictEqual(part1(INPUT.TEST), 15);
console.log(`📗 \x1b[36m The result of part 1 is ${part1(INPUT.PROD)} \x1b[0m`);

assert.strictEqual(part2(INPUT.TEST), 12);
console.log(`📗 \x1b[36m The result of part 2 is ${part2(INPUT.PROD)} \x1b[0m`);
