import Numerator from "../Numerator/Numerator";
import NumeratorService from "../NumeratorService/NumeratorService";

import AdditionModificator from "../Modificator/AdditionModificator";

class NumeratorController implements Numerator {

  constructor() {
    NumeratorService.setModificator(AdditionModificator);
  }
  
  numerate(array: string[]): string[] {
    const modifiedArray: string[] = NumeratorService.numerate(array);

    return modifiedArray;
  }
}

export default new NumeratorController();