import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"

const MovieSection=({cart,setCart,movieList,setMovieList})=>{
//console.log(cart,movieList)
    return(

    <>
    <AddMovie  movieList={movieList}
        setMovieList={setMovieList}/>
 
    <div className="movieSection">
        

    {
        movieList.map((element,index)=>(
            <MovieCard key={index} {...element} cart={cart} setCart={setCart}
            id={index}
            />
        ))
    }

        
    </div>
    </>
        
    )
}
export default MovieSection