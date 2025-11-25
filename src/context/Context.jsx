import { createContext, useState, useEffect } from "react";
import supabase from "../../supabase";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        async function getVideos() {
            const { data, error } = await supabase
                .from('Videos')
                .select('*')

            if (error) {
                console.log("Error al renderizar los datos: ", error)
            }

            setVideoList(data)
        }

        getVideos()
    }, [])

    async function addVideo(videoLink) {

        const newVideo = {
            videoLink,
            isFinished: false
        }

        const { data, error } = await supabase //se llama a supabase 
            .from('Videos') //se selecciona la tabla
            .insert([newVideo]) //se inserta
            .select() //se selecciona para mostrar en el front
            .single() //supabase envia un solo resultado al front

        setVideoList((prev) => [...prev, data])

        console.log(data)
        console.log(error)

    }

    async function handleDelete(id) {
        const { error } = await supabase
            .from('Videos')
            .delete()
            .eq("id", id)

        if (error) {
            console.log("Error al eliminar el video: ", error)
        }

        const videosFiltered = videoList.filter((video) => video.id !== id)

        setVideoList(videosFiltered)
    }


    return (
        <AppContext.Provider value={{addVideo,handleDelete,videoList}}>
            {children}
        </AppContext.Provider>
    )
}