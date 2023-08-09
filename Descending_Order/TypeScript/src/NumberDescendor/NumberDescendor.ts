import Descendor from "../Descendor/Descendor";
import newStringProcessor from "../StringProcessorFabric/StringProcessorFabric";

class NumberDescendor implements Descendor<number> {
  descend(n: number): number {
    const stringProcessor = newStringProcessor();

    const stringified: string = stringProcessor.toString(n);

    const splited: string[] = stringProcessor.split(stringified);

    const sorted: string[] = stringProcessor.sort(splited);

    const reversed: string[] = stringProcessor.reverse(sorted);

    const joined: string = stringProcessor.join(reversed);

    const numbified: number = stringProcessor.toNumber(joined);

    return numbified;
  }
}

export default new NumberDescendor();