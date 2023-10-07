import SpecialButton from "./SpecialButton"

const MovieCard=()=>{
    return(
        <>
        <div className="movieContainer">
            <img  className="moviePoster"src="https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" alt="" />
            <div className="movieSpecs">
                <h4 className="movieName"> RRR
                <button>toggleButton</button>
                <SpecialButton/>
                </h4>

                <h4>8.8</h4>
            </div>
            <p className="movieSummary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quia corporis, amet architecto earum cupiditate incidunt suscipit officia in ipsam adipisicing elit. Voluptatibus quia corporis, amet architecto earum cupiditate incidunt suscipit officia in ipsam</p>
        </div>
        </>
    )
}
export default MovieCard