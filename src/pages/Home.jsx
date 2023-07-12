import { NavLink } from "react-router-dom"
import ShowCharacters from "../components/ShowCharacters"

const Home = () => {
  return (
    <div>
        <NavLink to="/create"> <button>Crear</button> </NavLink>
         

        <ShowCharacters/>
    </div>
  )
}

export default Home