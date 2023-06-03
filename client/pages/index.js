import FormIndex from "@/component/index/form/FormIndex"
import Game from "@/component/index/game/Game"
import Intro from "@/component/index/intro/Intro"
import Neuro from "@/component/index/neuro/Neuro"
import Partner from "@/component/index/partner/Partner"
import Portfolio from "@/component/index/portfolio/Portfolio"
import Service from "@/component/index/service/Service"
import { $host } from "@/http/http"


export default function Home({ categories, portfolios, partners, services }) {

  return (
    <>
      <Intro categories={categories} />
      <Portfolio portfolios={portfolios} />
      <Service services={services} />
      <FormIndex />
      <Neuro />
      <Partner partners={partners} />
      <Game />
    </>
  )
}


export async function getServerSideProps() {

  const contacts = await $host.get('/contact')
  const categories = await $host.get('/category_all')
  const portfolios = await $host.get('/project?limit=12')
  const partners = await $host.get('/partner')
  const services = await $host.get('/services?type=1')

  return {
    props: {
      contacts: contacts.data,
      categories: categories.data,
      portfolios: portfolios.data,
      partners: partners.data,
      services: services.data,
    }
  }
}