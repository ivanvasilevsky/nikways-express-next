import Intro from "@/component/index/intro/Intro"
import { $host } from "@/http/http"

export default function Custom404() {


  return (
    <>
      <Intro />
      <p className="not__found__text">Страница не найдена</p>
    </>
  )
}


export async function getStaticProps() {

  const contacts = await $host.get('/contact')
  return {
    props: {
      contacts: contacts.data,
    }
  }
}