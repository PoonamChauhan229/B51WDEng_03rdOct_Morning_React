import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';


const AddMovie=({movieList,setMovieList})=>{
    //console.log(movieList,setMovieList)
    const [poster,setPoster]=useState("")
    const [name,setName]=useState("")
    const [rating,setRating]=useState("")
    const [summary,setSummary]=useState("")
    const navigate=useNavigate()
    const addToMovieList=()=>{
        const movie={poster,name,rating,summary}
        console.log(movie)
        // API call
        fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies`,{
            method:"POST",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(navigate('/'))
    }
   
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
        onClick={()=>addToMovieList()}
        
        >Add Movie</button>

        <Button variant="contained">Add Movie</Button>

    </div>
    )
}
export default AddMovie