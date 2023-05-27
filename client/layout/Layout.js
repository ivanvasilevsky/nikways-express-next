import HeadBlock from "@/component/main/HeadBlock"
import Header from "@/component/main/Header"
import Menu from "@/component/main/menu/Menu"

export default function Layout({ children }) {
  return (
    <>
      <HeadBlock title={children.props.title}/>
      <div className='page'>

        <Menu/>
        <Header/>

        {children}

      </div>
    </>
  )
}