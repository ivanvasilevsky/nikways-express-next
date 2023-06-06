import { useEffect, useRef, useState } from "react"
import Container from "../../main/Container"
import PortfolioItem from "./PortfolioItem"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio({ portfolios }) {

  const [scrollSecondRow, setScrollSecondRow] = useState(0)
  const [scrollLastRow, setScrollLastRow] = useState(0)

  const scrollBlock = useRef()
  const firstRow = useRef()
  const secondRow = useRef()
  const lastRow = useRef()

  const handleScroll = () => {
    const winHeight = window.innerHeight
    const firstHeight = firstRow.current.offsetHeight

    const blockHeight = scrollBlock.current.offsetHeight
    const secondSize = Number(((secondRow.current.offsetHeight - winHeight) / (firstHeight - winHeight)).toFixed(2))
    const lastSize = Number(((lastRow.current.offsetHeight - winHeight) / (firstHeight - winHeight)).toFixed(2))

    let startScroll = window.scrollY - scrollBlock.current.offsetTop

    if (startScroll > 0 && startScroll + winHeight < blockHeight) {
      setScrollSecondRow((startScroll * secondSize - startScroll))
      setScrollLastRow((startScroll * lastSize - startScroll))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  return (
    <Container className="portfolio">
      <h2 className="index__title">Наши работы</h2>

      <div className="portfolio__scroll__block" ref={scrollBlock}>
        <div
          className="portfolio__row"
          ref={firstRow}
        >
          {portfolios.slice(0, 3).map(item => (
            <PortfolioItem key={item.id} info={item} />
          ))}
        </div>
        <div
          className="portfolio__row scroll"
          ref={secondRow}
          style={{ top: `-${scrollSecondRow}px` }}
        >
          {portfolios.slice(3, 7).map(item => (
            <PortfolioItem key={item.id} info={item} />
          ))}

        </div>
        <div
          className="portfolio__row scroll"
          ref={lastRow}
          style={{ top: `-${scrollLastRow}px` }}
        >
          {portfolios.slice(7, 13).map(item => (
            <PortfolioItem key={item.id} info={item} />
          ))}
        </div>
      </div>

      <Link className="btn__more" href="/portfolio/all">
        <span>Смотреть все</span>
        <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
      </Link>
    </Container>
  )
}