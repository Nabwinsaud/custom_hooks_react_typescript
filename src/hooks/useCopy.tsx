import { useState } from "react";

type copiedText = string | null;

type textFunc = (text: string) => Promise<boolean>;
const useCopy = (): [copiedText, textFunc] => {
  const [copyText, setCopyText] = useState<copiedText>(null);
  // const copy = async (text: string): Promise<boolean> => {
  const copy: textFunc = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("something went wrong");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopyText(text);
      return true;
    } catch (error) {
      console.warn("could not copy", error);
      setCopyText(null);
      return false;
    }
  };
  return [copyText, copy];
};

export default useCopy;
