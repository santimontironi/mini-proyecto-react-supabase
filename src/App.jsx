import supabase from "./supabase"
import { useEffect, useState } from "react"
import { AppContextProvider } from "./context/Context"

function App() {

  const [inputVideo,setInputVideo] = useState('')
  const [videoList,setVideoList] = useState([])

  useEffect(() => {
    async function getVideos(){
      const {data,error} = await supabase
      .from('Videos')
      .select('*')

      if(error){
        console.log("Error al renderizar los datos: ",error)
      }

      setVideoList(data)
    }

    getVideos()
  },[])

  async function handleSubmit(e) {
    e.preventDefault()

    const newVideo = {
      videoLink: inputVideo,
      isFinished: false
    }

    const {data,error} = await supabase //se llama a supabase 
    .from('Videos') //se selecciona la tabla
    .insert([newVideo]) //se inserta
    .select() //se selecciona para mostrar en el front
    .single() //supabase envia un solo resultado al front

    setVideoList((prev) => [...prev,data])

    console.log(data)
    console.log(error)

  }

  async function handleDelete(id){
    const {error} = await supabase
    .from('Videos')
    .delete()
    .eq("id",id)

    if(error){
      console.log("Error al eliminar el video: ",error)
    }
    
    const videosFiltered = videoList.filter((video) => video.id !== id)

    setVideoList(videosFiltered)
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" value={inputVideo} onChange={(e) => setInputVideo(e.target.value)} />
        <button type="submit">Agregar video</button>
      </form>
      {videoList.map((video,index) => (
        <div key={index}> 
          <h1>{video.videoLink}</h1>
          <span>{video.isFinished}</span>
          <button onClick={() => handleDelete(video.id)}>Borrar</button>
        </div>
      ))}
    </div>

  )
}

export default App
