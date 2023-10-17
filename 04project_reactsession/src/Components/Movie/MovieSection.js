import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"
import { useEffect, useState } from "react"
import { movie } from "../../utils/constants"
import { useNavigate } from "react-router-dom"
import MovieCardMUI from "./MovieCardMUI"
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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

  //console.log(movieList)
//console.log(cart,movieList)
    return(

    <> 
    <div className="movieSection">
        

    {
        movieList?.map((element,index)=>(
          <MovieCardMUI key={index} {...element} cart={cart} setCart={setCart}
          id={element.id}
            // <MovieCard key={index} {...element} cart={cart} setCart={setCart}
            // id={element.id}

            // deleteButton={<button
            // onClick={()=>deleteMovie(element.id)}
            // >Delete</button>}

            deleteButton={
              <IconButton aria-label="add to favorites"
              onClick={()=>deleteMovie(element.id)}
              >
            <DeleteForeverIcon color="error" sx={{m:0.5}}/>                  
        </IconButton>
            }

            // editButton={<button 
            // onClick={()=>navigate(`/edit/${element.id}`)}
            // >Edit</button>}

            editButton={
              <IconButton aria-label="add to favorites"
              onClick={()=>navigate(`/edit/${element.id}`)}
              >
              <EditIcon color="primary" sx={{m:0.5}}/>                  
          </IconButton>
            }
            />
        ))
    }

        
    </div>
    </>
        
    )
}
export default MovieSection