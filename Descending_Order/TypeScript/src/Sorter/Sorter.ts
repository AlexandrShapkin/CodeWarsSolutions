export default interface Sorter<T> {
  sort(collection: T[]): T[];
}