import { useContext } from "react"
import { AppContext } from "../context/Context"
import VideoItem from "./VideoItem"

const VideoList = () => {

    const {videoList, deleteVideo} = useContext(AppContext)

    return (
        <div>
            {videoList.map((video) => <VideoItem key={video.id} id={video.id} videoLink={video.videoLink} isFinished={video.isFinished} handleDelete={deleteVideo} />)}
        </div>
    )
}

export default VideoList