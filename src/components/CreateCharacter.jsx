import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8080/characters"

const CreateCharacter = () => {

    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault() 
        //dos parámetro: 1 = url. parámetro 2 = un objeto con mis datos. 
        //Aquí le digo como enlazar lso datos de la api con los que le voy a enviar 
        await axios.post(url, { name: nombre, img: imagen, description: descripcion  }) 
        navigate("/")
    }


  return (
    <>
        <h2>Crear un elemento</h2>

        <form onSubmit={store}>
            <div>
                <label>Nombre</label>
                {/** nombre tiene que valer lo que ingresamos en el value del input */}
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
            </div>
            <div>
                <label>Imagen</label>
                <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
            </div>
            <div>
                <label>Descripción</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <button type="submit">Crear personaje</button>
        </form>
    </>
  )
}

export default CreateCharacter