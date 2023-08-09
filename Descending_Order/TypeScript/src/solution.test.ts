import { describe, expect, test } from "@jest/globals";
import { descendingOrder } from "./solution";

describe("descendingOrder", () => {
  test("should return some sample numbers in descending order", () => {
    expect(descendingOrder(0)).toStrictEqual(0);
    expect(descendingOrder(1)).toStrictEqual(1);
    expect(descendingOrder(123456789)).toStrictEqual(987654321);
  });

  test("should return some fixed numbers in descending order", () => {
    expect(descendingOrder(111)).toStrictEqual(111);
    expect(descendingOrder(15)).toStrictEqual(51);
    expect(descendingOrder(1021)).toStrictEqual(2110);
  });

  test("should return some random numbers in descending order", () => {
    for (let i = 0; i < 100; ++i) {
      const n = ~~(Math.random() * 1e9) + 1;
      
      const actual = descendingOrder(n);
      const expected = parseInt(n.toString().split("").sort().reverse().join(""));
      
      expect(actual).toStrictEqual(expected);
    }
  });
});
