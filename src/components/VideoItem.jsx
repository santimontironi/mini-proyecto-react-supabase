const VideoItem = ({id,videoLink, isFinished, handleDelete}) => {
  return (
    <div>
        <iframe src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <span>{isFinished ? "Terminado" : "No terminado"}</span>
        <button onClick={() => handleDelete(id)}>Eliminar</button>
    </div>
  )
}

export default VideoItem