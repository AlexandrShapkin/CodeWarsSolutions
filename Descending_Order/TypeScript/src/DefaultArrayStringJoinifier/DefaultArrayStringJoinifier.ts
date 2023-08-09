import Joinifier from "../Joinifier/Joinifier";

class DefaultArrayStringJoinifier implements Joinifier<string> {
  join(collection: string[]): string {
    const joined: string = collection.join("");
    return joined;
  }
}

export default new DefaultArrayStringJoinifier();