import config from "@/config"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioItem({ info }) {


  return (
    <div className="portfolio__card">
      <Link className="portfolio__card__link" href={`/portfolio/${info.slug}`}>
        <Image className="portfolio__card__preview" src={`${config.IMAGE_URL}/portfolio/${info.id}/${info.preview}`} width={370} height={500} alt={info.slug}/>
      </Link>

      <p className="portfolio__card__title">{info.name}</p>
      <div className="portfolio__card__tags">
        {JSON.parse(info.tags).map(item => (
          <p key={item} className="portfolio__card__tag">{item} /</p>
        ))}
      </div>
    </div>
  )
}