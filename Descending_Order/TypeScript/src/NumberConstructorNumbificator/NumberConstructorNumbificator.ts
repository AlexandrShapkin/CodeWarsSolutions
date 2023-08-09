import Numbificator from "../Numbificator/Numbificator";

class NumberConstructorNumbificator implements Numbificator<string> {
  toNumber(value: string): number {
    const numbified: number = Number(value);
    return numbified;
  }
}

export default new NumberConstructorNumbificator();