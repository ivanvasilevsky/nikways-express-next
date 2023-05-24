import Image from "next/image"
import Link from "next/link"

export default function LinkMenu({title = 'Ссылка', link}) {
  return (
    <Link className="menu__main__link" href={link}>
      <span>{title}</span>
      <Image src="/icons/arrow_menu.svg" width={40} height={40} priority alt="arrow" />
    </Link>
  )
}