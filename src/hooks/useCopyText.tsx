import { useState } from "react";

type textType = string | null;

type textFunc = (text: string) => Promise<boolean>;
export const useCopyText = (): [textType, textFunc] => {
  const [copyText, setCopyText] = useState<textType>(null);

  const copyToClipBoard: textFunc = async (text: string) => {
    // await navigator.clipboard.writeText(text);
    if (!navigator?.clipboard) {
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopyText(text);
      return true;
    } catch (error) {
      console.warn("could not copy", error);
      return false;
    }
  };
  //   return <div>useCopyText</div>;
  return [copyText, copyToClipBoard];
};
