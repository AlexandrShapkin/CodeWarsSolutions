export default interface Stringifier<T extends Object> {
  toString(value: T): string;
}