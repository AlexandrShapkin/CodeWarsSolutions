import Spliter from "../Spliter/Spliter";

class DefaultStringSpliter implements Spliter<string> {
  split(value: string): string[] {
    const splited: string[] = value.split("");
    return splited;
  }
}

export default new DefaultStringSpliter();