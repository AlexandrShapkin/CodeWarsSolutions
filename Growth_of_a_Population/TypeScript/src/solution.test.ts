import { describe, expect, test } from "@jest/globals";
import { nbYear } from "./solution";

describe("Fixed Tests", () => {
  test("Basic tests nbYear", () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
    expect(nbYear(1500000, 0.25, -1000, 2000000)).toBe(151);
    expect(nbYear(1500000, 0.25, 1, 2000000)).toBe(116);
    expect(nbYear(1500000, 0.0, 10000, 2000000)).toBe(50);
    expect(nbYear(1000, 2, 50, 1214)).toBe(4);
  });
});

function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function nbYearSWO(p0: number, percent: number, aug: number, p: number, y = 0) {
  for (; p0 < p; y++) p0 = Math.floor(p0 * (1 + percent / 100) + aug);
  return y;
}

describe("Random Tests", () => {
  test("Random tests", () => {
    for (var i = 0; i < 100; i++) {
      var p0 = randint(10000, 15000000);
      var percent = randint(50, 1000) / 100.0;
      var aug = Math.floor(p0 / 200.0);
      var k = randint(5, 100);
      var p = p0 + k * aug;
      expect(nbYear(p0, percent, aug, p)).toBe(nbYearSWO(p0, percent, aug, p));
    }
  });
});
