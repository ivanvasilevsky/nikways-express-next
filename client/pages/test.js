import { $host } from "@/http/http"

export default function Test() {


  return (
    <>
      <div className="test_block"></div>
      <div className="test_block2"></div>
    </>
  )
}


export async function getServerSideProps() {

  const contacts = await $host.get('/contact')

  return {
    props: {
      contacts: contacts.data,
    }
  }
}