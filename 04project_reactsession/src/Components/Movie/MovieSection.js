import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"
import { useEffect, useState } from "react"
import { movie } from "../../utils/constants"
import { useNavigate } from "react-router-dom"

const MovieSection=({cart,setCart})=>{
 const navigate=useNavigate()
const [movieList,setMovieList]=useState([])

useEffect(()=>{
    getMovies()
  },[])

  const getMovies=()=>{
    fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies`)
    .then((data)=>data.json())
    .then((res)=> setMovieList(res))
  }

  const deleteMovie=(id)=>{
     console.log(id,"Deleted Suceessfully")
    fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`,{method:"DELETE"})
    .then(data=>getMovies())
  }

  console.log(movieList)
//console.log(cart,movieList)
    return(

    <> 
    <div className="movieSection">
        

    {
        movieList?.map((element,index)=>(
            <MovieCard key={index} {...element} cart={cart} setCart={setCart}
            id={element.id}

            deleteButton={<button
            onClick={()=>deleteMovie(element.id)}
            >Delete</button>}

            editButton={<button 
            onClick={()=>navigate(`/edit/${element.id}`)}
            >Edit</button>}
            />
        ))
    }

        
    </div>
    </>
        
    )
}
export default MovieSection