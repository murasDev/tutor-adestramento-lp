import TrainerCard from '../trainer-card'

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="w-full flex flex-col min-h-[100%] bg-(--primary) bg-[url(/png/about-us-bg.png)] bg-cover bg-no-repeat p-4 md:p-10 md:flex-row gap-5"
    >
      <div className="flex flex-col gap-4 md:max-w-[30%] justify-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-(--secondary)">Sobre</h1>
          <div className="flex flex-col items-center justify-center p-2 bg-(--secondary) rounded-md">
            <h1 className="text-2xl text-white ">nós</h1>
          </div>
        </div>

        <p className="text-white font-extralight">
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
      <div className="mt-4 md:mt-0 md:justify-centeritems-center flex w-full gap-3">
        <TrainerCard title="MurasDev" />
        <TrainerCard title="MurasDev" />
        <TrainerCard title="MurasDev" />
      </div>
    </section>
  )
}
