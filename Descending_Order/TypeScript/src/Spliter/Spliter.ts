export default interface Spliter<T> {
  split(value: T): T[];
}