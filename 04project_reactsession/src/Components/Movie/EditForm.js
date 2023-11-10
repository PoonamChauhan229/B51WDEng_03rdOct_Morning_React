import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../utils/constants'

const EditForm = () => {
const {id}=useParams()
console.log(id)
const [movie,setMovie]=useState(null)
const getMovieById=()=>{
    fetch(`${url}/${id}`)
    .then(data=>data.json())
    .then(res=>setMovie(res))
}

useEffect(()=>getMovieById(),[])
//console.log(movie)

  return (
    <div>
        {
            movie ? <EditMovieForm movie={movie}/> 
            
            :<h1>Loading....</h1>
        }

    </div>
  )
}

export default EditForm


const EditMovieForm=({movie})=>{
const navigate=useNavigate()
const [poster,setPoster]=useState(movie?.poster)
const [name,setName]=useState(movie?.name)
const [rating,setRating]=useState(movie?.rating)
const [summary,setSummary]=useState(movie?.summary)

const updateMovie=(id)=>{
    console.log(id)
   // console.log(id)
    const movie={name,poster,rating,summary}
    console.log(movie)
    // API call
    fetch(`${url}/${id}`,{
            method:"PUT",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>navigate('/'))
      //  console.log(movie)
}
    return(

        <>
            {/* Poster */}
            <label>Poster:</label>
        <input type="text" value={poster} 
        onChange={(e)=>{setPoster(e.target.value)}}
        /> <br/>
        {/* Name */}
        <label>Name:</label>
        <input type="text" value={name} 
        onChange={(e)=>{setName(e.target.value)}}
        /> <br/>
        {/* Rating */}        
        <label>Rating:</label>
        <input type="text" value={rating} 
        onChange={(e)=>{setRating(e.target.value)}}
        /> <br/>

        {/* Summary */}
        <label>Summary:</label>
        <input type="text" value={summary} 
        onChange={(e)=>{setSummary(e.target.value)}}
        /> <br/>       

        <br/>
        <button
        onClick={()=>updateMovie(movie.id)}
        >Update Movie</button>
            </>
    )
}

