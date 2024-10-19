import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// 1 + 2 = 3
test("sum of 1 and 2 should be 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

// -1 + 1 = 0
test("sum of -1 and 1 should be 0", () => {
  assert.strictEqual(sum(-1, 1), 0);
});

// 0 + 0 = 0
test("sum of 0 and 0 should be 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

// -2 + -2 = -4
test("sum of -2 and -2 should be -4", () => {
  assert.strictEqual(sum(-2, -2), -4);
});

/* using Deno 2

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sum } from "./index.js";

Deno.test("sum of 1 and 2 should be 3", () => {
  assertEquals(sum(1, 2), 3);
});

Deno.test("sum of -1 and 1 should be 0", () => {
  assertEquals(sum(-1, 1), 0);
});

Deno.test("sum of 0 and 0 should be 0", () => {
  assertEquals(sum(0, 0), 0);
});

Deno.test("sum of -2 and -2 should be -4", () => {
  assertEquals(sum(-2, -2), -4);
});

*/
