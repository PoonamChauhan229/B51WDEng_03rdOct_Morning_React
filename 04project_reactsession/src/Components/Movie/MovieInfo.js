import { useNavigate, useParams } from "react-router-dom";

const MovieInfo=({movieList})=>{
    //returns an object
    const {id}=useParams()
    //console.log(id)
    //console.log(movieList[id])
    const {name,summary,trailer}=movieList[id]

    const navigate=useNavigate()

    return(
        <>
          <div>Movie Info- {id}</div>
        <iframe width="100%" height="480" src={trailer}
        title={name}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div>{summary}</div>

        <button
        onClick={()=>navigate(-1)}
        >Back</button>
        </>
      
    )
}

export default MovieInfo;