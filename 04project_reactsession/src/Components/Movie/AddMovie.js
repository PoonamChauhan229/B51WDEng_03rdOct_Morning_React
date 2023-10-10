import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddMovie=({movieList,setMovieList})=>{
    //console.log(movieList,setMovieList)
    const [poster,setPoster]=useState("")
    const [name,setName]=useState("")
    const [rating,setRating]=useState("")
    const [summary,setSummary]=useState("")


   
    return(
        <div style={{marginBottom:"10px"}}>
            
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
        onClick={()=>{
        const movie={poster,name,rating,summary}
        //console.log(movie)
        setMovieList([...movieList,movie])
            
        }}
        
        >Add Movie</button>
    </div>
    )
}
export default AddMovie