import Image from "next/image";

export default function LocaleSection() {
  return (
    <section className="flex-col items-center md:flex-row md:items-center flex bg-(--tertiary) p-5 md:py-8 justify-center">
      <div className="flex flex-col md:flex-row gap-6 max-w-[70%]">
        <LocaleComponent
          descriptionText="Estamos localizados em Sorocaba-SP"
          alt="Ícone de localização"
          imgSrc="/icons/home_pin.svg"
        />

        <LocaleComponent
          descriptionText="Atendemos a domicílio em toda região de Sorocaba"
          alt="Ícone de atendimento a domícilio"
          imgSrc="/icons/delivery_truck_speed.svg"
        />
      </div>
    </section>
  );
}

interface Props {
  imgSrc: string;
  descriptionText: string;
  alt: string;
}

function LocaleComponent(props: Props) {
  return (
    <div className="flex flex-row items-center">
      <Image
        alt={props.alt}
        src={props.imgSrc}
        width={70}
        height={70}
        className="min-w-20"
      />
      <div className="w-0.5 bg-white mx-2 h-15 flex" />
      <span className="ml-2 text-white">{props.descriptionText}</span>
    </div>
  );
}
