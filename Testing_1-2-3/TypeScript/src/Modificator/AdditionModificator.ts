import Modificator from "./Modificator";

class AdditionModificator implements Modificator {
  getModify(): (modifiable: string) => string {
    var counter: number = 1;
    const modify = (modifiable: string): string => {
      const modified: string = `${counter++}: ` + modifiable;
      return modified;
    };
    return modify;
  }
}

export default new AdditionModificator();