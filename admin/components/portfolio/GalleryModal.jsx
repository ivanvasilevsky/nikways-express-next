import { useEffect, useState } from "react";
import Modal from "../main/Modal";
import $host from "../../src/http/http";
import GalleryItem from "./GalleryItem";
import GalleryCreate from "./GalleryCreate";

export default function GalleryModal({ title, modalOff, slug }) {

  const [ galleries, setGalleries ] = useState([])
  const [id, setId] = useState()

  const getInfo = async () => {
    const response = await $host.get(`/project/${slug}`)
    setId(response.data.id)
    setGalleries(response.data.portfolio_galleries)
  }

  useEffect(() => {
    getInfo()
  }, [])


  return (
    <Modal title={title} modalOff={modalOff}>
      <div className="gallery__modal__inner">
        <div className="gallery__modal__head">
          <p className="gallery__modal__title">Презентация</p>
          <GalleryCreate block={1} id={id} updateOn={getInfo}/>
        </div>
        <div className="gallery__modal__block">
          {galleries.filter(item => item.block == 1).map(item => (
            <GalleryItem key={item.id} info={item} id={id} updateOn={getInfo}/>
          ))}
        </div>

        <div className="gallery__modal__head">
          <p className="gallery__modal__title">Раскадровка</p>
          <GalleryCreate block={2} id={id} updateOn={getInfo}/>
        </div>
        <div className="gallery__modal__block">
          {galleries.filter(item => item.block == 2).map(item => (
            <GalleryItem key={item.id} info={item} id={id} updateOn={getInfo}/>
          ))}
        </div>
      </div>
    </Modal>
  )
}