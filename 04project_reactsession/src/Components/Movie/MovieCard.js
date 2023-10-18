import { useState } from "react";
import SpecialButton from "./SpecialButton";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ name, poster, rating, summary ,cart,setCart,id,deleteButton,editButton}) => {
 // console.log(name, poster, rating, summary);
//  console.log(cart)
const [show,setShow]=useState(false)
const [btnText,setBtnText]=useState("Add to Cart")
// console.log(id)

//show=>true => text should be visible
// show=> false => text should not visibile
// conditional rendering


// rating> 8=> green otherwise red 
// if else
// if(rating>8){console.log("green")}else{console.log("red")}
// ternary operator
// (consdition)? true:false
// (rating>8)?console.log("green"):console.log("red")
// console.log(show)

const movieRating={
  color:rating>8?"green":"red"
}

const displaySummary={
  display:show?"block":"none"
}

 // UseNavigate
 const navigate=useNavigate()


  return (
    <>
      <div className="movieContainer">
        <img className="moviePoster" src={poster} alt="" />
        <div className="movieSpecs">
          <h4 className="movieName"> {name}</h4>
          <h4 style={movieRating}>⭐{rating}</h4>
        </div>
        <div>
          <span>
            <button
            onClick={()=>{
              setShow(!show)
            }}
            //  conditional rendering of emojis
            >
            {show?"🔽":"🔼"}            
            
            </button>


            <span>
            <button
            onClick={()=>{
              // setCart(cart+1)
                               
                // setBtnText("Remove from Cart")
                 btnText=="Add to Cart"?setBtnText("Remove from Cart"):setBtnText("Add to Cart")    
                // console.log(btnText)

                 // cart value
                btnText=="Add to Cart"?setCart(cart+1):setCart(cart-1)              
                
            }}
            >
            {btnText=="Add to Cart"?"Add to Cart":"Remove From Cart"}</button>
            </span>
            <span><SpecialButton /></span>
          </span>

          



          <span>
            {/* info of movie : video trailer + movie name+ summary */}
            <button
            onClick={()=>navigate(`/movies/${id}`)}
            
            >Info</button>
          </span>
          <span>
            {editButton}
            {deleteButton}
            
          </span>
        </div>
        {/* {show && <p className="movieSummary">{summary}</p>} */}

        {/* {show?<p className="movieSummary">{summary}</p>:null} */}

        <p className="movieSummary" style={displaySummary}>{summary}</p>

      </div>
    </>
  );
};
export default MovieCard;
