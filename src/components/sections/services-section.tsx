import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-[100%] bg-(--primary)">
      <div className="flex p-4 flex-col gap-4">
        <div className=" flex bg-(--secondary) p-1 rounded-md">
          <h1 className="text-2xl text-(--primary)"> Nossos Serviços</h1>
        </div>
        <div>
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={100}
            height={100}
          />
          <h2> Dog walk</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button type="button"> Saiba mais </button>
        </div>
      </div>
    </section>
  )
}
