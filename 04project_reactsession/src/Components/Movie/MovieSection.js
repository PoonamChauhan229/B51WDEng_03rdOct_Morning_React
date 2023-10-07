import MovieCard from "./MovieCard"
import { movie } from "../../utils/constants"

const MovieSection=({cart,setCart})=>{
//console.log(cart,setCart)
    return(
    <div className="movieSection">
    {
        movie.map((element)=>(
            <MovieCard {...element} cart={cart} setCart={setCart}/>
        ))
    }

        
    </div>
        
    )
}
export default MovieSection