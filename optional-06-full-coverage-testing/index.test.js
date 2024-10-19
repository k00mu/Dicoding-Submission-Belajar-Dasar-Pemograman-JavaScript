import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// Test 1: Normal case (both positive numbers)
test("sum of 2 and 3 should be 5", () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Test 2: One or both arguments are not numbers
test('sum of "a" and 2 should return 0', () => {
  assert.strictEqual(sum("a", 2), 0);
});

test("sum of 3 and null should return 0", () => {
  assert.strictEqual(sum(3, null), 0);
});

test("sum of undefined and 5 should return 0", () => {
  assert.strictEqual(sum(undefined, 5), 0);
});

test("sum of true and 5 should return 0", () => {
  assert.strictEqual(sum(true, 5), 0);
});

// Test 3: One or both arguments are negative numbers
test("sum of -1 and 2 should return 0", () => {
  assert.strictEqual(sum(-1, 2), 0);
});

test("sum of 3 and -2 should return 0", () => {
  assert.strictEqual(sum(3, -2), 0);
});

test("sum of -5 and -2 should return 0", () => {
  assert.strictEqual(sum(-5, -2), 0);
});

// Test 4: Both arguments are zero
test("sum of 0 and 0 should return 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test 5: One argument is zero, the other is a positive number
test("sum of 0 and 5 should return 5", () => {
  assert.strictEqual(sum(0, 5), 5);
});

test("sum of 3 and 0 should return 3", () => {
  assert.strictEqual(sum(3, 0), 3);
});

/* using Deno 2

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sum from "./index.js";

// Test 1: Normal case (both positive numbers)
Deno.test("sum of 2 and 3 should be 5", () => {
  assertEquals(sum(2, 3), 5);
});

// Test 2: One or both arguments are not numbers
Deno.test('sum of "a" and 2 should return 0', () => {
  assertEquals(sum("a", 2), 0);
});

Deno.test('sum of 3 and null should return 0', () => {
  assertEquals(sum(3, null), 0);
});

Deno.test('sum of undefined and 5 should return 0', () => {
  assertEquals(sum(undefined, 5), 0);
});

Deno.test('sum of true and 5 should return 0', () => {
  assertEquals(sum(true, 5), 0);
});

// Test 3: One or both arguments are negative numbers
Deno.test("sum of -1 and 2 should return 0", () => {
  assertEquals(sum(-1, 2), 0);
});

Deno.test("sum of 3 and -2 should return 0", () => {
  assertEquals(sum(3, -2), 0);
});

Deno.test("sum of -5 and -2 should return 0", () => {
  assertEquals(sum(-5, -2), 0);
});

// Test 4: Both arguments are zero
Deno.test("sum of 0 and 0 should return 0", () => {
  assertEquals(sum(0, 0), 0);
});

// Test 5: One argument is zero, the other is a positive number
Deno.test("sum of 0 and 5 should return 5", () => {
  assertEquals(sum(0, 5), 5);
});

Deno.test("sum of 3 and 0 should return 3", () => {
  assertEquals(sum(3, 0), 3);
});

*/
