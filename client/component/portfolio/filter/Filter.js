
import Container from "@/component/main/Container"
import FilterBtn from "./FilterBtn"
import FilterItem from "./FilterItem"

export default function Filter({ categoryInfo, categories }) {

  return (
    <Container className="filter">
      <div className="filter__category">
        <FilterBtn name="Все" slug="all"/>
        {categories.map(item => (
          <FilterBtn key={item.id} name={item.name} slug={item.slug}/>
        ))}
      </div>
      <div className="filter__block">
        {categoryInfo.filters.map(item => (
          <FilterItem key={item} name={item}/>
        ))}
      </div>
    </Container>
  )
}