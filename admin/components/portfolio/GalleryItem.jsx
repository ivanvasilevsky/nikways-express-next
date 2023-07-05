import config from "../../config";
import $host from "../../src/http/http";

export default function GalleryItem({ info, id, updateOn }) {


  const deleteItem = async () => {
    const response = await $host.delete(`/portfolio_gallery/${info.id}`)

    console.log(response.data);
    if (response) {
      updateOn()
    }
  }

  return (
    <div className='gallery__item'>
      {info.type == 1 ?
      <div className="gallery__item__image">
        <img className="gallery__photo" src={config.IMAGE_URL + `/portfolio/${id}/` + info.source} alt="photo" />
        <button onClick={deleteItem} className="btn gallery__delete__image__btn">
          <img src="/admin/icons/remove.svg" alt="delete" />
        </button>
      </div>
      :
      <div className="gallery__item__video__outer">
        <div className="gallery__item__video">
          <iframe src={`https://www.youtube.com/embed/${info.source}?controls=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture; web-share"></iframe>
        </div>
        <button onClick={deleteItem} className="btn btn-def gallery__delete__btn">Удалить</button>
      </div>
      }
    </div>
  )
}