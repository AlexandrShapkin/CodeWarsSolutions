import {describe, expect, it, test} from '@jest/globals';
import { number } from './solution';

describe("Testing 1-2-3", () => {
  test("Fixed tests", () => {
    expect(number([])).toStrictEqual([]);
    expect(number(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
    expect(number(["", "", "", "", ""])).toStrictEqual(["1: ", "2: ", "3: ", "4: ", "5: "]);
  });
});

describe("Random tests", () => {
  function randint(min: number, max :number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function sol(x: string[]): string[]{
    return x.map((s, i) => `${i + 1}: ${s}`);
  }
  
  for(let i: number = 0; i < 100; i++){
    let arr: string[] = Array.from({length: randint(0, 100)}, (_, i) => String.fromCharCode(97 + randint(0, 74)))
    test(`Testing for array = ${JSON.stringify(arr)}`, () => {
      expect(number(arr.slice())).toStrictEqual(sol(arr.slice()));
    });
  }
});