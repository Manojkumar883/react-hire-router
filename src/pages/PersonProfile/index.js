import { useState} from "react"
import HireForm from "./components/HireForm"
import {useLocation} from "react-router"
import { useEffect} from "react"



function PersonProfile(props) {
  const [person, setPerson] = useState(null)


  let location = useLocation()

  useEffect(() =>  {
    if (location.state) {
      const { person} = location.state
      console.log("locationstate", location.state)
      setPerson(location.state)
    }

  },[location])

  if (!person) return <p>loading...</p>
  return (
    <article>
        <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
