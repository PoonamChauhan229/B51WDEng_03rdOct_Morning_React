import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieInfo=()=>{
    //returns an object
    const [movie,setMovie]=useState({})
    const {id}=useParams()
    console.log(id)
    //console.log(movieList[id])
    useEffect(()=>getMovieById(),[])
    const {name,summary,trailer}=movie

    const getMovieById=()=>{
      fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`)
      .then((data)=>data.json())
      .then((res)=> setMovie(res))
    }
    
    console.log(movie)
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