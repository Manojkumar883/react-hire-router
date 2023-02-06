import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import {Routes, Route, Link} from "react-router-dom"
import "./styles.css"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to = {`/`} hiredPeople = {hiredPeople}
            serHiredPeople = {setHiredPeople}>Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path = "/" element = {<Dashboard />} />
      </Routes>
      <Routes>
        <Route path = {`view/:id`} element ={<PersonProfile/>} />
      </Routes>
    </>
  )
}
