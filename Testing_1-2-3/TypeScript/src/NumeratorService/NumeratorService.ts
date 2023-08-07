import Numerator from "../Numerator/Numerator";
import Modificator from "../Modificator/Modificator";

class NumeratorService implements Numerator {
  modificator: Modificator;

  setModificator(modificator: Modificator) {
    this.modificator = modificator;
  }

  numerate(array: string[]): string[]{
    let result: string[] = Array();

    const modify = this.modificator.getModify();

    for (let elem of array) {
      const modified: string = modify(elem);
      result.push(modified);
    }

    return result;
  };
}

export default new NumeratorService();