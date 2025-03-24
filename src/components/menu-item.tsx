import Link from 'next/link'

type Props = {
  text: string
  href: string
}

export default function MenuItem({ text, href }: Props) {
  return (
    <Link
      href={href}
      className="text-white relative hover:text-[var(--secondary)] transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[var(--secondary)] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      {text}
    </Link>
  )
}
