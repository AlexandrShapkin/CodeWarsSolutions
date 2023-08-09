import StringProcessor from "../StringProcessor/StringProcessor";

import DefaultArrayStringSorter from "../DefaultArrayStringSorter/DefaultArrayStringSorter";
import StringConstructorStringifier from "../StringConstructorStringifier/StringConstructorStringifier";
import NumberConstructorNumbificator from "../NumberConstructorNumbificator/NumberConstructorNumbificator";
import DefaultStringSpliter from "../DefaultStringSpliter/DefaultStringSpliter";
import DefaultArrayStringReverser from "../DefaultArraySrtingReverser/DefaultArrayStringReverser";
import DefaultArrayStringJoinifier from "../DefaultArrayStringJoinifier/DefaultArrayStringJoinifier";

function newStringProcessor(): StringProcessor {
  const stringProcessor: StringProcessor = new StringProcessor(
    DefaultArrayStringSorter,
    StringConstructorStringifier,
    NumberConstructorNumbificator,
    DefaultStringSpliter,
    DefaultArrayStringReverser,
    DefaultArrayStringJoinifier
  );
  return stringProcessor;
}

export default newStringProcessor;
