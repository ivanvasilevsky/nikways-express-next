import { useState } from "react"
import Dashboard from "./Dashboard"
import { Route, Routes } from "react-router-dom"
import Portfolio from "../../src/pages/Portfolio"

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
          </Routes>

        </div>
      </div>
    </>
  )
}