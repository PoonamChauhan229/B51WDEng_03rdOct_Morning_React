import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { url } from "../../utils/constants";

const MovieInfo=()=>{
    //returns an object
    const [movie,setMovie]=useState({})
    const {id}=useParams()
   // console.log(id)
    //console.log(movieList[id])
    useEffect(()=>getMovieById(),[])
    const {name,summary,trailer}=movie

    // Fetch 
    // const getMovieById=()=>{
    //   fetch(`${url}/${id}`)
    //   .then((data)=>data.json())
    //   .then((res)=> setMovie(res))
    // }

    // Axios
    async function getMovieById() {
      try {
        const response = await axios.get(`${url}/${id}`);
        console.log(response.data);
        setMovie(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(()=>{
      getMovieById()
    },[])
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