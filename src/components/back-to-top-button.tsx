'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className=" p-2 gap-1 relative flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:pr-4 "
        >
          <Image
            src="/icons/arrow-up.svg"
            alt="Seta para cima"
            width={32}
            height={32}
          />
          <span>Voltar ao topo</span>
        </button>
      )}
    </div>
  )
}
