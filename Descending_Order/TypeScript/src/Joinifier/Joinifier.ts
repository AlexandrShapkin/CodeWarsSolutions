export default interface Joinifier<T> {
  join(collection: T[]): string;
}