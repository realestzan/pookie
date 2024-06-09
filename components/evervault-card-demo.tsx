
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
interface Props {
  text: string,
  img: string
}
export function EvervaultCardDemo({ text, img }: Props) {
  return (
    <div className="border border-black/[0.2] bg-white dark:bg-black/[0.5] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-8 text-center relative h-[30rem] relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> 

      <Image src={img} width={250} height={200} alt='book' className="absolute z-10" />
      <EvervaultCard text={text} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 mx-auto my-4">
        Watch {text} collection
      </p>
    </div>
  );
}
