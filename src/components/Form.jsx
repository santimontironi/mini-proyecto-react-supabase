import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../context/Context"

const Form = () => {

    const[inputVideo, setInputVideo] = useState("")

    const{addVideo} = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputVideo === "") return
        addVideo(inputVideo)
        setInputVideo("")
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" value={inputVideo} onChange={(e) => setInputVideo(e.target.value)} />
                <button type="submit">Agregar video</button>
            </form>

        </div>
    )
}

export default Form