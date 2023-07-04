import { useEffect, useState } from "react"
import Modal from "../main/Modal"
import $host from "../../src/http/http"


export default function PortfolioModal({ title, modalOff, slug }) {

  const [error, setError] = useState('')

  const [tabId, setTabId] = useState(0)

  const tabs = [
    'Инфо',
    'Медиа',
    'Идея'
  ]

  const [deleteVerify, setDeleteVerify] = useState(false)

  const [id, setId] = useState()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [client, setClient] = useState('')
  const [deadline, setDeadline] = useState('')
  const [goal, setGoal] = useState('')
  const [workTime, setWorkTime] = useState('')
  const [place, setPlace] = useState('')
  const [environment, setEnvironment] = useState('')
  const [theme, setTheme] = useState('')
  const [price, setPrice] = useState('DEFAULT')

  const [tags, setTags] = useState()
  const [selectCategory, setSelectCategory] = useState()
  const [categories, setCategories] = useState([])

  const [preview, setPreview] = useState()
  const [bg, setBg] = useState()
  const [videoLink, setVideoLink] = useState('')
  const [backStageLink, setBackStageLink] = useState('')
  const [reviewLink, setReviewLink] = useState('')

  const [idea, setIdea] = useState('')
  const [ideaText, setIdeaText] = useState('')

  const getCategories = async () => {
    const response = await $host.get('/category_all')
    setCategories(response.data)
  }

  const getInfo = async () => {
    const response = await $host.get(`/project/${slug}`)
    const info = response.data

    if (slug) {
      setId(info.id)
    }

    setName(info.name)
    setType(info.type)
    setClient(info.client)
    setDeadline(info.deadline)
    setGoal(info.goal)
    setWorkTime(info.work_time)
    setPlace(info.place)
    setEnvironment(info.environment)
    setTheme(info.theme)
    setPrice(info.price)

    setTags(JSON.parse(info.tags).join(','))
    setSelectCategory(info.categoryId)

    // setPreview(info.preview)
    // setBg(info.bg)
    // setIdea(info.idea_photo)

    setVideoLink(info.video)
    setBackStageLink(info.backstage)
    setReviewLink(info.review)

    setIdeaText(info.idea_text)
  }

  useEffect(() => {
    getCategories()

    if (slug) {
      getInfo()
    }
  }, [])


  const eventProject = async () => {

    if (
      name.length == 0 ||
      type.length == 0 ||
      client.length == 0 ||
      deadline.length == 0 ||
      goal.length == 0 ||
      workTime.length == 0 ||
      place.length == 0 ||
      environment.length == 0 ||
      theme.length == 0 ||
      price == 'DEFAULT' ||
      tags.length == 0 ||
      selectCategory.length == 0 ||
      categories.length == 0
    ) {
      return setError('Заполните поля отмеченные звездочкой *')
    } else {
      setError('')
    }

    const formData = new FormData

    if (id) {
      formData.append('id', id)
    }

    formData.append('name', name)
    formData.append('type', type)
    formData.append('client', client)
    formData.append('deadline', deadline)
    formData.append('work_time', workTime)
    formData.append('goal', goal)
    formData.append('place', place)
    formData.append('environment', environment)
    formData.append('theme', theme)
    formData.append('price', price)
    formData.append('tags', JSON.stringify(tags.split(',')))
    formData.append('categoryId', selectCategory)
    if (preview) {
      console.log(preview);
      formData.append('preview', preview)
    }
    if (bg) {
      formData.append('bg', bg)
    }
    formData.append('video', videoLink)
    formData.append('backstage', backStageLink)
    formData.append('review', reviewLink)
    if (idea) {
      formData.append('idea_photo', idea)
    }
    formData.append('idea_text', ideaText)

    let response
    if (!id) {
      response = await $host.post('/project', formData)
    } else {
      response = await $host.put('/project', formData)
    }

    if (response) {
      modalOff()
    } else {
      return setError('Ошибка!')
    }
  }

  const deletePortfolio = async () => {
    const response = await $host.delete(`/project/${id}`)

    if (response.data.status == 0) {
      return setError(response.data.message)
    }

    if (response.data.status == 1) {
      modalOff()
    }
  }

  return (
    <Modal title={title} modalOff={modalOff} backClick={false}>
      <div className="portfolio__modal__inner">
        <div className="portfolio__modal__head">
          {tabs.map((item, i) => (
            <button key={i} onClick={() => setTabId(i)} className={`btn btn-def portfolio__modal__tab ${tabId == i && 'active'}`}>{item}</button>
          ))}
        </div>

        {id &&
          <>
          {!deleteVerify ?
            <button onClick={()=>setDeleteVerify(true)} className="btn btn-def btn-warning">Удалить</button>
          :
            <button onClick={deletePortfolio} className="btn btn-def btn-warning">Подтверждаю!</button>
          }
          </>
        }

        <div className="portfolio__modal__form">
          {tabId == 0 &&
          <>
            <div className="portfolio__modal__item">
              <p className="main__input__label">Название *</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="main__input" placeholder="Название"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Тип проекта *</p>
              <input onChange={(e)=>setType(e.target.value)} value={type} type="text" className="main__input" placeholder="Тип проекта"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Клиент *</p>
              <input onChange={(e)=>setClient(e.target.value)} value={client} type="text" className="main__input" placeholder="Клиент"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Дедлайн *</p>
              <input onChange={(e)=>setDeadline(e.target.value)} value={deadline} type="text" className="main__input" placeholder="Дедлайн"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Срок выполнения *</p>
              <input onChange={(e)=>setWorkTime(e.target.value)} value={workTime} type="text" className="main__input" placeholder="Срок выполнения"/>
            </div>
            <div className="portfolio__modal__item">
              <p className="main__input__label">Цель *</p>
              <input onChange={(e)=>setGoal(e.target.value)} value={goal} type="text" className="main__input" placeholder="Цель"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Место съемок *</p>
              <input onChange={(e)=>setPlace(e.target.value)} value={place} type="text" className="main__input" placeholder="Место съемок"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Условия *</p>
              <input onChange={(e)=>setEnvironment(e.target.value)} value={environment} type="text" className="main__input" placeholder="Условия"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Тема *</p>
              <input onChange={(e)=>setTheme(e.target.value)} value={theme} type="text" className="main__input" placeholder="Тема"/>
            </div>

            <div className="portfolio__modal__item double">
              <p className="main__input__label">Цена *</p>
              <select onChange={(e)=>setPrice(e.target.value)} value={price} className="main__input">
                <option value="DEFAULT" disabled>Цена</option>
                <option value="1">Низкая</option>
                <option value="2">Средняя</option>
                <option value="3">Высокая</option>
              </select>
            </div>

            <div className="portfolio__modal__item double">
              <p className="main__input__label">Теги *</p>
              <input onChange={(e)=>setTags(e.target.value)} value={tags} type="text" className="main__input" placeholder="Теги через запятую"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Категория *</p>
              <select onChange={(e)=>setSelectCategory(e.target.value)} value={selectCategory} className="main__input">
                <option value="DEFAULT" disabled>Категория</option>
                {categories.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </>
          }
          {tabId == 1 &&
          <>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Превью *</p>
              <input onChange={(e)=>setPreview(e.target.files[0])} type="file" className="main__input file"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Фон *</p>
              <input onChange={(e)=>setBg(e.target.files[0])} type="file" className="main__input file"/>
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Видео</p>
              <input value={videoLink} onChange={(e)=>setVideoLink(e.target.value)} type="text" className="main__input" placeholder="Код из ссылки"/>
              {videoLink &&
                <div className="portfolio__modal__video">
                  <iframe width="100%" src={`https://www.youtube.com/embed/${videoLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              }
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">BackStage</p>
              <input value={backStageLink} onChange={(e)=>setBackStageLink(e.target.value)} type="text" className="main__input" placeholder="Код из ссылки"/>
              {backStageLink &&
                <div className="portfolio__modal__video">
                  <iframe width="100%" src={`https://www.youtube.com/embed/${backStageLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              }
            </div>
            <div className="portfolio__modal__item double">
              <p className="main__input__label">Отзыв</p>
              <input value={reviewLink} onChange={(e)=>setReviewLink(e.target.value)} type="text" className="main__input" placeholder="Код из ссылки"/>
              {reviewLink &&
                <div className="portfolio__modal__video">
                  <iframe width="100%" src={`https://www.youtube.com/embed/${reviewLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              }
            </div>
          </>
          }
          {tabId == 2 &&
          <>
            <div className="portfolio__modal__item">
              <p className="main__input__label">Текст идеи</p>
              <textarea onChange={(e)=>setIdeaText(e.target.value)} value={ideaText} className="main__input" placeholder="Текст"></textarea>
            </div>
            <div className="portfolio__modal__item">
              <p className="main__input__label">Изображение идеи</p>
              <input onChange={(e)=>setIdea(e.target.files[0])} type="file" className="main__input file"/>
            </div>
          </>
          }
        </div>

        <p className="modal__error__text">{error}</p>

        <button onClick={eventProject} className="btn btn-def portfolio__modal__btn">{title}</button>

      </div>
    </Modal>
  )
}