import { FlipWords } from "./ui/flip-words";

interface Props { 
    text1?: string,
    words: string[],
    text2?: string,
    css?: string
  }
  
  export function FlipWordsDemo({text1, words, text2, css} : Props) {
   
    return (
     
        <div className="text-4xl font-bold text-neutral-600 dark:text-neutral-400">
          {text1}
          <FlipWords className={css} words={words} /> <br />
          {text2}
        </div>
    );
  }