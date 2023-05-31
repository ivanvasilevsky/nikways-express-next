import { $host } from "@/http/http"

export default function Custom500() {


  return (
    <>
      <p>Ошибка сервера</p>
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