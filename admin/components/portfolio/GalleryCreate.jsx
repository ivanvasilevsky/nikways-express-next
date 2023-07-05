import { useState } from "react"
import $host from "../../src/http/http"

export default function GalleryCreate({id, block, updateOn}) {


  const [youtubeActive, setYoutubeActive] = useState(false)
  const [youtubeLink, setYoutubeLink] = useState('')

  const [file, setFile] = useState()

  const createItem = async (type, source) => {

    const formData = new FormData
    formData.append('portfolioId', id)
    formData.append('type', type)
    formData.append('block', block)
    formData.append('source', source)

    const response = await $host.post('/portfolio_gallery', formData)

    if (response) {
      if (type == 2) {
        setYoutubeActive(false)
        setYoutubeLink('')
      } else {
        setFile()
      }
      updateOn()
    }

  }


  return (
    <div className="gallery__item gallery__item__create">

      {youtubeLink.length > 8 &&
      <button onClick={()=>createItem(2, youtubeLink)} className="btn category__item__edit">
        <img src="/icons/plus_g.svg" alt="check" />
      </button>
      }

      {!youtubeActive ?
      <button onClick={()=>setYoutubeActive(true)} className="btn gallery__create__btn">Добавить YouTube</button>
      :
      <input onChange={e=>setYoutubeLink(e.target.value)} className="main__input" placeholder="Код YouTube"/>
      }

      {file &&
      <button onClick={()=>createItem(1, file)} className="btn category__item__edit">
        <img src="/icons/plus_g.svg" alt="check" />
      </button>
      }
      <label htmlFor={`galleryPhoto${block}`} className="btn gallery__create__btn">Добавить Изображение</label>
      <input onChange={e=>setFile(e.target.files[0])} id={`galleryPhoto${block}`}  type="file" hidden />
    </div>
  )
}