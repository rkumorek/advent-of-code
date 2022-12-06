import { strict as assert } from "node:assert";

import * as INPUT from "./input.js";

/**
 * @param {string} input
 * @param {number} count
 * */
function parseInput(input, count) {
  const [a, b] = input.split("\n\n");

  const stack = a
    .match(/(   |\[[A-Z]\])(?: |\n)/gm)
    ?.reduce((acc, curr, index) => {
      const key = index % count;
      if (!acc[key]) acc[key] = [];
      acc[key].push(curr.trim().replace("\n", ""));
      return acc;
    }, []);

  return {
    stack: stack?.map((x) => {
      return x.filter(Boolean);
    }),
    procedure: b.split("\n"),
  };
}

/** @param {string} input */
function part1(input, count) {
  const { stack, procedure } = parseInput(input, count);

  for (const task of procedure) {
    const [move, from, to] = task.match(/(\d\d?)/g)?.map(Number);
    const fromCol = stack[from - 1];
    if (!fromCol) console.log(from - 1, { task, move, from, to });
    const toCol = stack[to - 1];
    let c = 0;
    while (c < move) {
      const chunk = fromCol.shift();
      if (chunk) {
        toCol.unshift(chunk);
      }
      c++;
    }
  }
  return stack?.map((x) => x[0].replace(/[\[\]]/g, "")).join("");
}

/** @param {string} input */
function part2(input, count) {
  const { stack, procedure } = parseInput(input, count);

  console.log(stack);
  for (const task of procedure) {
    const [move, from, to] = task.match(/(\d\d?)/g)?.map(Number);
    const fromCol = stack[from - 1];
    const toCol = stack[to - 1];
    const chunk = fromCol.splice(0, move);
    console.log({ chunk, task, stack });
    if (chunk) {
      toCol.unshift(...chunk);
    }
  }
  return stack?.map((x) => x[0].replace(/[\[\]]/g, "")).join("");
}

assert.strictEqual(part1(INPUT.TEST, 3), "CMZ");
console.log(`The result of part 1 is ${part1(INPUT.PROD, 9)}`);

assert.strictEqual(part2(INPUT.TEST, 3), "MCD");
console.log(`The result of part 2 is ${part2(INPUT.PROD, 9)}`);
