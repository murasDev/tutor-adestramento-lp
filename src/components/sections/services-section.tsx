import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-[100%] p-4 bg-(--background)">
      <div className="flex flex-col items-start gap-4">
        <div className=" flex bg-(--secondary) px-4 py-2 rounded-md">
          <h1 className="text-2xl text-(--primary) ">Nossos Serviços</h1>
        </div>

        <div className="bg-(--background) shadow-md rounded-lg p-4 max-w-md">
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={300}
            height={200}
            className="rounded-md w-full"
          />
          <h2 className=" text-(--primary) text-lg font-semibold mt-2">
            Dog walk
          </h2>
          <p className="text-sm text-(--primary)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button
            type="button"
            className="mt-2 bg-(--secondary) text-white px-4 py-2 rounded-md flex justify-between w-full items-center"
          >
            Saiba mais
          </button>
        </div>

        <div className="bg-(--background) shadow-md rounded-lg p-4 max-w-md">
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={300}
            height={200}
            className="rounded-md w-full"
          />
          <h2 className=" text-(--primary) text-lg font-semibold mt-2">
            Pet Sitting
          </h2>
          <p className="text-sm text-(--primary)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button
            type="button"
            className="mt-2 bg-(--secondary) text-white px-4 py-2 rounded-md flex justify-between w-full items-center"
          >
            Saiba mais
          </button>
        </div>

        <div className="bg-(--background) shadow-md rounded-lg p-4 max-w-md">
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={300}
            height={200}
            className="rounded-md w-full"
          />
          <h2 className=" text-(--primary) text-lg font-semibold mt-2">
            Dog walk
          </h2>
          <p className="text-sm text-(--primary)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button
            type="button"
            className="mt-2 bg-(--secondary) text-white px-4 py-2 rounded-md flex justify-between w-full items-center"
          >
            Saiba mais
          </button>
        </div>

        <div className="bg-(--background) shadow-md rounded-lg p-4 max-w-md">
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={300}
            height={200}
            className="rounded-md w-full"
          />
          <h2 className=" text-(--primary) text-lg font-semibold mt-2">
            Pet Sitting
          </h2>
          <p className="text-sm text-(--primary)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button
            type="button"
            className="mt-2 bg-(--secondary) text-white px-4 py-2 rounded-md flex justify-between w-full items-center"
          >
            Saiba mais
          </button>
        </div>

        <div className="bg-(--background) shadow-md rounded-lg p-4 max-w-md">
          <Image
            src={
              'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3.jpg'
            }
            alt="Foto do cachorro Dr. Dolittle"
            width={300}
            height={200}
            className="rounded-md w-full"
          />
          <h2 className=" text-(--primary) text-lg font-semibold mt-2">
            Pet Sitting
          </h2>
          <p className="text-sm text-(--primary)">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button
            type="button"
            className="mt-2 bg-(--secondary) text-white px-4 py-2 rounded-md flex justify-between w-full items-center"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  )
}
