import { $host } from "@/http/http"

export default function Custom404() {


  return (
    <>
      <p>Страница не найдена</p>
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