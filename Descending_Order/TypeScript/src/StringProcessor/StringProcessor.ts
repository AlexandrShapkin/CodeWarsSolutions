import Sorter from "../Sorter/Sorter";
import Stringifier from "../Stringifier/Stringifier";
import Numbificator from "../Numbificator/Numbificator";
import Spliter from "../Spliter/Spliter";
import Reverser from "../Reverser/Reverser";
import Joinifier from "../Joinifier/Joinifier";

class StringProcessor
  implements
    Sorter<string>,
    Stringifier<number>,
    Numbificator<string>,
    Spliter<string>,
    Reverser<string>,
    Joinifier<string>
{
  private _sorter: Sorter<string>;
  private _stringifier: Stringifier<number>;
  private _numbificator: Numbificator<string>;
  private _spliter: Spliter<string>;
  private _reverser: Reverser<string>;
  private _joinifier: Joinifier<string>;

  public constructor(
    sorter: Sorter<string>,
    stringifier: Stringifier<number>,
    numbificator: Numbificator<string>,
    spliter: Spliter<string>,
    reverser: Reverser<string>,
    joinifier: Joinifier<string>
  ) {
    this._sorter = sorter;
    this._stringifier = stringifier;
    this._numbificator = numbificator;
    this._spliter = spliter;
    this._reverser = reverser;
    this._joinifier = joinifier;
  }

  sort(collection: string[]): string[] {
    const sorted: string[] = this._sorter.sort(collection);
    return sorted;
  }

  reverse(collection: string[]): string[] {
    const reversed: string[] = this._reverser.reverse(collection);
    return reversed;
  }

  toString(value: number): string {
    const stringified: string = this._stringifier.toString(value);
    return stringified;
  }

  toNumber(value: string): number {
    const numbified: number = this._numbificator.toNumber(value);
    return numbified;
  }

  split(value: string): string[] {
    const splited: string[] = this._spliter.split(value);
    return splited;
  }

  join(collection: string[]): string {
    const joined: string = this._joinifier.join(collection);
    return joined;
  }
}

export default StringProcessor;
