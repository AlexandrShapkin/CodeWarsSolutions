export default interface Modificator {
  getModify: () => (modifiable: string) => string;
}
