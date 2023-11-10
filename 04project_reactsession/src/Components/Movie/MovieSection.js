import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"
import { useEffect, useState } from "react"
import { movie, url } from "../../utils/constants"
import { useNavigate } from "react-router-dom"
import MovieCardMUI from "./MovieCardMUI"
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from "react-redux"
import { addItem } from "../../utils/cartSlice"



const MovieSection=({cart,setCart})=>{
 const navigate=useNavigate()
const [movieList,setMovieList]=useState([])
const dispatch=useDispatch()

useEffect(()=>{
    getMovies()
  },[])

  const getMovies=()=>{
    fetch(url)
    .then((data)=>data.json())
    .then((res)=> setMovieList(res))
  }

  const deleteMovie=(id)=>{
     console.log(id,"Deleted Suceessfully")
    fetch(`${url}/${id}`,{method:"DELETE"})
    .then(data=>getMovies())
  }

  const handleAddItem=(movie)=>{
    console.log(movie)
    //dispath an action
    //useDispath()
    dispatch(addItem(movie))
  }

  //console.log(movieList)
//console.log(cart,movieList)
    return(

    <> 
    <div className="movieSection">
        

    {
        movieList?.map((element,index)=>(
         
          <MovieCardMUI key={index} {...element} cart={cart} setCart={setCart}
          // id={element.id} 
          id={element._id} 
            // <MovieCard key={index} {...element} cart={cart} setCart={setCart}
            // id={element.id}

            // deleteButton={<button
            // onClick={()=>deleteMovie(element.id)}
            // >Delete</button>}

            deleteButton={
              <IconButton aria-label="add to favorites"
              onClick={()=>deleteMovie(element._id)}
              >
            <DeleteForeverIcon color="error" sx={{m:0.5}}/>                  
        </IconButton>
            }

            // editButton={<button 
            // onClick={()=>navigate(`/edit/${element.id}`)}
            // >Edit</button>}

            editButton={
              <IconButton aria-label="add to favorites"
              onClick={()=>navigate(`/edit/${element._id}`)}
              >
              <EditIcon color="primary" sx={{m:0.5}}/>                  
          </IconButton>
            }

            AddItem={
              <button 
              onClick={()=>handleAddItem(element)}
              >Add to Store</button>
            }
            />
        ))
    }

        
    </div>
    </>
        
    )
}
export default MovieSection