import { useEffect, useState } from "react"
import $host from "../http/http"

export default function Info() {

  const [emailOne, setEmailOne] = useState('')
  const [emailTwo, setEmailTwo] = useState('')
  const [emailThree, setEmailThree] = useState('')
  const [emailFour, setEmailFour] = useState('')
  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')
  const [linkInsta, setLinkInsta] = useState('')
  const [linkWhatsapp, setLinkWhatsapp] = useState('')
  const [linkTelegram, setLinkTelegram] = useState('')
  const [linkYoutube, setLinkYoutube] = useState('')


  const getInfo = async () => {
    const response = await $host.get('/contact')
    const info = response.data

    setEmailOne(info.email_one)
    setEmailTwo(info.email_two)
    setEmailThree(info.email_three)
    setEmailFour(info.email_four)
    setNumberOne(info.number_one)
    setNumberTwo(info.number_two)
    setLinkInsta(info.link_insta)
    setLinkWhatsapp(info.link_whatsapp)
    setLinkTelegram(info.link_telegram)
    setLinkYoutube(info.link_youtube)
  }

  useEffect(() => {
    getInfo()
  }, [])

  const updateInfo = async () => {
    await $host.put('/contact', {
      email_one: emailOne,
      email_two: emailTwo,
      email_three: emailThree,
      email_four: emailFour,
      number_one: numberOne,
      number_two: numberTwo,
      link_insta: linkInsta,
      link_whatsapp: linkWhatsapp,
      link_facebook: linkTelegram,
      link_youtube: linkYoutube
    })
  }

  useEffect(() => {
    const time = setTimeout(() => {
      updateInfo()
    }, 500)

    return () => {
      clearTimeout(time)
    }

  }, [emailOne, emailTwo, emailThree, emailFour, numberOne, numberTwo, linkInsta, linkWhatsapp, linkTelegram, linkYoutube])


  return (
    <div className='category'>
      <div className="info__inner">
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Первая почта</p>
          <input onChange={(e)=>setEmailOne(e.target.value)} value={emailOne} type="text" className="main__input" placeholder="Почта"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Вторая почта</p>
          <input onChange={(e)=>setEmailTwo(e.target.value)} value={emailTwo} type="text" className="main__input" placeholder="Почта"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Третья почта</p>
          <input onChange={(e)=>setEmailThree(e.target.value)} value={emailThree} type="text" className="main__input" placeholder="Почта"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Четвертая почта</p>
          <input onChange={(e)=>setEmailFour(e.target.value)} value={emailFour} type="text" className="main__input" placeholder="Почта"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Первый номер</p>
          <input onChange={(e)=>setNumberOne(e.target.value)} value={numberOne} type="text" className="main__input" placeholder="Номер телефона"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Второй номер</p>
          <input onChange={(e)=>setNumberTwo(e.target.value)} value={numberTwo} type="text" className="main__input" placeholder="Номер телефона"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Instagram</p>
          <input onChange={(e)=>setLinkInsta(e.target.value)} value={linkInsta} type="text" className="main__input" placeholder="Ссылка"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Whatsapp</p>
          <input onChange={(e)=>setLinkWhatsapp(e.target.value)} value={linkWhatsapp} type="text" className="main__input" placeholder="Ссылка"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Whatsapp</p>
          <input onChange={(e)=>setLinkTelegram(e.target.value)} value={linkTelegram} type="text" className="main__input" placeholder="Ссылка"/>
        </div>
        <div className="portfolio__modal__item double">
          <p className="main__input__label">Whatsapp</p>
          <input onChange={(e)=>setLinkYoutube(e.target.value)} value={linkYoutube} type="text" className="main__input" placeholder="Ссылка"/>
        </div>
      </div>
    </div>
  )
}