import { useState } from "react"
import Dashboard from "./Dashboard"
import { Route, Routes } from "react-router-dom"
import Portfolio from "../../src/pages/Portfolio"
import Category from "../../src/pages/Category"
import Info from "../../src/pages/Info"
import ServiceGroup from "../../src/pages/ServiceGroup"

export default function Page({ checkLogin }) {

  const [title, setTitle] = useState()

  return (
    <>
      <Dashboard titleOn={setTitle} checkLogin={checkLogin}/>

      <div className="page__block">
        <h2 className="page__title">{title}</h2>
        <div className="page__outer">

          <Routes>
            <Route path="/admin/" element={<Portfolio />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/service_group" element={<ServiceGroup />} />
            <Route path="/admin/info" element={<Info />} />
          </Routes>

        </div>
      </div>
    </>
  )
}