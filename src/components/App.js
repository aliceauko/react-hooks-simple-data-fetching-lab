// create your App component here
import React, {useEffect, useState} from "react"

function App (){
 const [image, setImage] = useState("")
 const [load, setLoad] = useState(false)

    useEffect(() =>{

        fetch(" https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data =>{
            setLoad(!load)

            setImage(data.message)
        })
    }, [])

    if(!load){
        return <p>Loading...</p>
    }
    return ( <img src ={image} alt="A Random Dog"></img>

    )
}

export default App