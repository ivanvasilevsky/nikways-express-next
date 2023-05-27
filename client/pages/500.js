import { $host } from "@/http/http"

export default function Custom500() {


  return (
    <>
      <div className="test_block"></div>
      <div className="test_block2"></div>
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