export default interface Descendor<T> {
  descend(n: T): T;
}