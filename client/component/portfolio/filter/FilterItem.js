import { useRouter } from "next/router"

export default function FilterItem({name}) {

  const router = useRouter()
  const query = router.query

  const pushQuery = () => {
    router.push({
      query: { ...query, tag: name }
    }, undefined, { scroll: false })
  }

  return (
    <button onClick={pushQuery} className={`btn filter__item ${query.tag == name ? 'active' : ''}`}>{name}</button>
  )
}