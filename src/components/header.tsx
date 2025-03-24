'use client'
import Image from 'next/image'
import { useState } from 'react'
import MenuItem from './menu-item'

const menuItems = [
  { text: 'Home', href: '/#home' },
  { text: 'Sobre nós', href: '/#about-us' },
  { text: 'Nossos serviços', href: '/#services' },
  { text: 'Filosofia', href: '/#philosophy' },
  { text: 'Clientes', href: '/#clients' },
  { text: 'Contato', href: '/#contact' },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="absolute top-0 right-0 left-0 p-3 md:px-8 md:py-3 flex justify-between bg-(--primary) items-center">
      <Image
        src="/png/logo-negative.png"
        alt="Tutor logo negative version"
        width={45}
        height={45}
      />

      <div className="hidden md:flex space-x-6">
        {menuItems.map(item => (
          <MenuItem key={item.text} text={item.text} href={item.href} />
        ))}
      </div>
      <div className="hidden md:flex space-x-6">
        <Image
          alt="Icone do youtube"
          src="/icons/youtube.svg"
          className="hover:opacity-80 cursor-pointer"
          width={24}
          height={24}
        />

        <Image
          alt="Icone do instagram da tutor"
          src="/icons/instagram.svg"
          className="hover:opacity-80 cursor-pointer"
          width={24}
          height={24}
        />
      </div>
      <div className="md:hidden">
        <Image
          src={openMenu ? '/icons/close.svg' : '/icons/menu.svg'}
          alt="Menu icon"
          width={32}
          height={32}
          onClick={() => setOpenMenu(prev => !prev)}
        />
        {openMenu && (
          <div className="absolute top-15 left-0 right-0 bg-(--primary) w-full">
            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col h-full gap-4">
                {menuItems.map(item => (
                  <MenuItem key={item.text} text={item.text} href={item.href} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
