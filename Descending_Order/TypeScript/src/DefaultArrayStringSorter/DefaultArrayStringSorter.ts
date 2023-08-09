import Sorter from "../Sorter/Sorter";

class DefaultArrayStringSorter implements Sorter<string> {
  sort(collection: string[]): string[] {
    const sorted: string[] = collection.sort((a, b) => a > b ? 1 : -1);
    return sorted;
  }
}

export default new DefaultArrayStringSorter();