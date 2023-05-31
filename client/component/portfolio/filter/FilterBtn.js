import Link from "next/link"
import { useRouter } from "next/router"

export default function FilterBtn({name, slug = ''}) {

  const router = useRouter()
  const route = router.query.category

  return (
    <Link
      scroll={false}
      href={`/portfolio/${slug}`}
      className={`btn filter__category__item ${route == slug ? 'active': ''}`}
    >{name}</Link>
  )
}