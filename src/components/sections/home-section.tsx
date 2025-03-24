import Image from 'next/image'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="bg-[url(/png/home-bg.png)] bg-no-repeat min-h-[100%] p-3 w-screen h-screen flex flex-col justify-center items-center gap-3"
    >
      <Image
        src="/png/main-logo.png"
        alt="Tutor logo"
        width={350}
        height={350}
      />
      <h1 className="text-2xl font-bold text-(--primary)">
        Seu Cão Educado e Feliz
      </h1>
    </section>
  )
}
