import PortfolioItem from "@/component/index/portfolio/PortfolioItem"
import config from "@/config"
import { $host } from "@/http/http"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Project({ project, categories }) {

  const [portfolio, setPortfolio] = useState([])
  const [categorySelect, setCategorySelect] = useState(categories[0])

  const getPortfolio = async (slug) => {
    const response = await $host.get(`/category/${slug}?limit=6`)
    setCategorySelect(response.data.info)
    setPortfolio(response.data.portfolios)
  }

  useState(() => {
    getPortfolio(categories[0].slug)
  }, [])

  console.log(project.video);

  return (
    <>
      <div className="project">
        <section className='project__banner'>
          <Image className="project__banner__bg" src={config.IMAGE_URL + `/portfolio/${project.id}/` + project.bg} width={1920} height={1080} alt={project.name} />
          <h1 className="project__title">{project.name}</h1>
        </section>

        <section className="project__videos">
          <div className="container">
            <div className="project__head">
              <div className="project__head__item"><span>Тип проекта:</span> {project.type}</div>
              <div className="project__head__item"><span>Клиент:</span> {project.client}</div>
              <div className="project__head__item"><span>Срок выполнения:</span> {project.deadline}</div>
            </div>

            {project.video &&
              <div className="project__video">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            }

            <div className="project__review">
              {project.backstage &&
                <div className="project__review__item">
                  <p className="project__review__title">Как это было</p>
                  <div className="project__review__item__video">
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.backstage}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </div>
              }
              {project.review &&
                <div className="project__review__item">
                  <p className="project__review__title">Отзыв</p>
                  <div className="project__review__item__video">
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.review}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>


        <section className="project__info">
          <Image className="project__info__wave" src="/ui/info_top.svg" width={1920} height={90} alt="wave" />
          <Image className="project__info__wave" src="/ui/info_bot.svg" width={1920} height={90} alt="wave" />
          <p className="project__info__title">Информация о проекте</p>

          <div className="container">
            <div className="project__info__block">
              <div className="project__info__item">
                <p className="project__info__subtitle">Цель:</p>
                <p className="project__info__text">{project.goal}</p>
              </div>
              <div className="project__info__item">
                <p className="project__info__subtitle">Срок выполнения:</p>
                <p className="project__info__text">{project.deadline}</p>
              </div>
              <div className="project__info__item">
                <p className="project__info__subtitle">Место съемок:</p>
                <p className="project__info__text">{project.place}</p>
              </div>
              <div className="project__info__item">
                <p className="project__info__subtitle">Условия:</p>
                <p className="project__info__text">{project.environment}</p>
              </div>
              <div className="project__info__item">
                <p className="project__info__subtitle">Тематика:</p>
                <p className="project__info__text">{project.theme}</p>
              </div>
              <div className="project__info__item">
                <p className="project__info__subtitle">Цена:</p>
                <div className="project__info__item__price">
                  {[1, 2, 3].map(item => (
                    <Image key={item} className={`project__info__dollar ${item <= project.price && 'active'}`} src="/icons/dollar.svg" width={44} height={64} alt="dollar" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {project.idea_text || project.idea_photo &&
          <section className="project__idea">
            <div className="container">
              <p className="project__main__title">Какая идея?</p>
              <div className="project__idea__block">
                <div className="project__idea__photo">
                  <Image src={config.IMAGE_URL + `/portfolio/${project.id}/` + project.idea_photo} width={570} height={320} alt="idea" />
                </div>
                <p className="project__idea__text">{project.idea_text}</p>
              </div>
            </div>
          </section>
        }


        {project.portfolio_galleries.filter(item => item.block == 1).length > 0 &&
          <section className="project__present">
            <div className="container">
              <p className="project__main__title">Презентация / Фото с офиса?</p>
              <div className="project__present__block">
                {project.portfolio_galleries.filter(item => item.block == 1).map(item => (
                  <div key={item.id} className="project__present__item">
                    {item.type == 1 ?
                      <Image src={config.IMAGE_URL + `/portfolio/${project.id}/` + item.source} width={370} height={300} alt={item.id} />
                      :
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.source}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;full-screen;" allowFullScreen></iframe>
                    }
                  </div>
                ))}
              </div>
            </div>
          </section>
        }


        {project.portfolio_galleries.filter(item => item.block == 1).length > 0 &&
          <section className="project__info">
            <Image className="project__info__wave" src="/ui/info_top.svg" width={1920} height={90} alt="wave" />
            <Image className="project__info__wave" src="/ui/info_bot.svg" width={1920} height={90} alt="wave" />
            <p className="project__info__title">Разработка сценария и раскадровка</p>

            <div className="container">
              <div className="project__dev__block">
                {project.portfolio_galleries.filter(item => item.block == 2).map(item => (
                  <div key={item.id} className="project__dev__item">
                    {item.type == 1 ?
                      <Image src={config.IMAGE_URL + `/portfolio/${project.id}/` + item.source} width={370} height={300} alt={item.id} />
                      :
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.source}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;full-screen;" allowFullScreen></iframe>
                    }
                  </div>
                ))}

              </div>
            </div>
          </section>
        }

        <section className="project__portfolio">
          <div className="container">
            <p className="project__portfolio__title">Другие наши проекты</p>

            <div className="project__portfolio__head">
              {categories.map(item => (
                <button key={item.id} onClick={() => getPortfolio(item.slug)} className={`btn project__portfolio__item ${categorySelect.id == item.id && 'active'}`}>{item.name}</button>
              ))}
            </div>

            <div className="project__portfolio__grid">
              {portfolio.map(item => (
                <PortfolioItem key={item.id} info={item} />
              ))}
            </div>

            <Link scroll={true} href={`/portfolio/${categorySelect.slug}/`} className="btn__more project__more__btn">
              <span>Смотреть все</span>
              <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const contacts = await $host.get('/contact')
  const project = await $host.get(`/project/${context.params.project}`)
  const categories = await $host.get('/category_all')

  return {
    props: {
      contacts: contacts.data,
      project: project.data,
      categories: categories.data
    }
  }
}