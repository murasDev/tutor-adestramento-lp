import Image from "next/image";

type Props = {
  title: string;
  imageSrc?: string;
};

export default function TrainerCard({ title, imageSrc }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={imageSrc ?? "https://github.com/murasDev.png"}
        alt={title}
        className="rounded-md"
        width={220}
        height={140}
      />
      <div className="p-1 md:p-2 bg-(--secondary) rounded-md w-full text-center">
        <h2 className="text-sm font-bold text-white">{title}</h2>
      </div>
    </div>
  );
}
