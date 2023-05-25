import Intro from "@/component/index/intro/Intro"
import { $host } from "@/http/http"


export default function Home({ categories }) {


  return (
    <>
      <Intro categories={categories}/>
    </>
  )
}


export async function getServerSideProps() {

  const categories = await $host.get('/category')

  return {
    props: {
      categories: categories.data
    }
  }
}