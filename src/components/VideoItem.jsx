import { useContext } from "react";
import { AppContext } from "../context/Context";

const VideoItem = ({ id, videoLink, isFinished }) => {

  const { handleDelete } = useContext(AppContext)

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoLink}`} // videoLink = solo ID del video
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <span>{isFinished ? "Terminado" : "No terminado"}</span>
      <button onClick={() => handleDelete(id)}>Eliminar</button>
    </div>
  );
};

export default VideoItem;