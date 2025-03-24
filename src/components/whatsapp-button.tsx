import Image from 'next/image'
import Link from 'next/link'

export default function WhatsappButton() {
  return (
    <Link className=" flex p-3 rounded-xl bg-(--green)" href="">
      <div className="flex items-center md:space-x-2">
        <Image
          src="/icons/whatsapp.svg"
          alt="Whatsapp icon"
          width={30}
          height={30}
        />
        <p className="hidden md:flex font-bold text-[14px] text-white">
          Contato via whatsapp
        </p>
      </div>
    </Link>
  )
}
