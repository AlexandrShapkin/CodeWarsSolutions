import Reverser from "../Reverser/Reverser";

class DefaultArrayStringReverser implements Reverser<string> {
  reverse(collection: string[]): string[] {
    const reversed: string[] = collection.reverse();
    return reversed;
  }
}

export default new DefaultArrayStringReverser();