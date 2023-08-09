import Stringifier from "../Stringifier/Stringifier";

class StringConstructorStringifier implements Stringifier<number> {
  toString(value: number): string {
    const stringified: string = String(value);
    return stringified;
  }
}

export default new StringConstructorStringifier();