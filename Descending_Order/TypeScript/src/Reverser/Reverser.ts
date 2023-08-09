export default interface Reverser<T> {
  reverse(collection: T[]): T[];
}