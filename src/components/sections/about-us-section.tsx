import TrainerCard from "../trainer-card";

const images = [
  {
    src: "https://github.com/murasDev.png",
    alt: "Murasaki Dev 1",
    title: "MurasDev",
  },
  {
    src: "https://github.com/murasDev.png",
    alt: "Murasaki Dev 2",
    title: "MurasDev",
  },
  {
    src: "https://github.com/murasDev.png",
    alt: "Murasaki Dev 3",
    title: "MurasDev",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="w-full flex flex-col bg-(--primary) bg-[url(/png/about-us-bg.png)] bg-cover bg-no-repeat sm:p-8 p-4 md:p-10"
    >
      <div className="flex flex-col min-lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-4 flex-1 justify-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl text-(--secondary)">Sobre</h1>
            <div className="flex flex-col items-center justify-center p-2 bg-(--secondary) rounded-md">
              <h1 className="text-2xl text-white ">nós</h1>
            </div>
          </div>

          <p className="text-white font-extralight lg:text-lg">
            Atuamos há cerca de dois anos na região de Sorocaba, oferecendo
            adestramento, consultoria e serviços pet com foco no bem-estar e na
            harmonia entre pets e tutores. Utilizamos métodos positivos e
            personalizados para garantir um aprendizado eficiente e uma
            convivência equilibrada. Com profissionais especializados em
            comportamento canino e principalmente, apaixonados pelo que fazem a
            Tutor entrega o que é necessário respeitando a realidade e
            individualidade de cada cliente.
          </p>
        </div>
        <div className="flex flex-wrap flex-1 gap-4 py-10 justify-center items-center">
          {images.map((image) => (
            <TrainerCard
              key={image.alt}
              imageSrc={image.src}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
