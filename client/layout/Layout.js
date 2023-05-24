import HeadBlock from "@/component/main/HeadBlock"
import Menu from "@/component/main/menu/Menu"

export default function Layout({ children }) {
  return (
    <>
      <HeadBlock title={children.props.title}/>
      <div className='page'>

        <Menu/>

        {children}

      </div>
    </>
  )
}