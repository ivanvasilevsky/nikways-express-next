import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import $host from "../http/http"
import config from "../../config"
import PortfolioModal from "../../components/portfolio/PortfolioModal"

export default function Portfolio() {

  const [modal, setModal] = useState(false)
  const [modalSlug, setModalSlug] = useState()
  const [modalTitle, setModalTitle] = useState('Создать')

  const [portfolios, setPortfolios] = useState([])

  const getPortfolio = async () => {
    const response = await $host.get('/project')
    setPortfolios(response.data)
  }

  useEffect(() => {
    getPortfolio()
  }, [])



  const modalOn = (slug) => {
    if (slug) {
      setModalSlug(slug)
      setModalTitle('Изменить')
    }
    setModal(true)
  }

  const modalOff = () => {
    getPortfolio()
    setModal(false)
    setModalTitle('Создать')
    setModalSlug()
  }


  return (
    <>
    {modal &&
      createPortal(<PortfolioModal title={modalTitle}  modalOff={modalOff} slug={modalSlug}/>, document.querySelector('#modal'))
    }

    <div className='category'>
      <div className="category__head">
        <button onClick={() => modalOn()} className="btn btn-def category__add">Добавить</button>
      </div>
      <div className="category__inner portfolio__inner">
        <div className="category__grid portfolio__grid">

          {portfolios.map(item => (
            <div className="category__item portfolio__item" key={item.id}>
              <div className="category__item__head">
                <p className="portfolio__name">{item.name}</p>

                <div className="portfolio__btn__block">
                  <button onClick={() => galleryModalOn(item.slug)} className="btn category__item__edit">
                    <img src="/admin/icons/gallery.svg" alt="gallery" />
                  </button>
                  <button onClick={() => modalOn(item.slug)} className="btn category__item__edit">
                    <img src="/admin/icons/setting.svg" alt="setting" />
                  </button>
                </div>
              </div>
              <a target="_blank" href={`${config.SITE_URL}/project/${item.slug}`} className="portfolio__preview">
                <img src={`${config.IMAGE_URL}/portfolio/${item.id}/` + item.preview} alt="preview" />
              </a>
              <div className="category__item__block">
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    </>
  )
}