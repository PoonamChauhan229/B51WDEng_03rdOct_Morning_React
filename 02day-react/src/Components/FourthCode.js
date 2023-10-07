// const FourthCode=(props)=>{
//     console.log(props)

import { useState } from "react";

//     const {nickName,pic}=props
const FourthCode=({nickName,pic})=>{
    // const count=0;
    // react variable=>state variable
    //HOOKS
    // const[state,setState]=useState("xyz")
    //this return an array which we destructed it
    //state=>userdefined=>local react variable
    //setState=>userdefined=> function which will update the value of state variable

    // use it as it is
    // const [state]=useState("random")
    // Like and dislike button

    const[like,setLike]=useState(0)
    const[dislike,setDisLike]=useState(0)
    return(
        <>
            
            <div className="border" style={{marginBottom:"20%"}}>
                <h6>FourthCode</h6>
                <img  className="profile-pic" src={pic} alt="" />
                <h2>Hi, I am {nickName +"Guvi"}</h2>
                <h3>My NickName is {nickName}</h3>
                <button
                onClick={()=>{
                    setLike(like+1)
                    console.log(like)
                }}  
                >👍{like}</button>
                <button 
                onClick={()=>{
                    setDisLike(dislike+1)
                }}
                >👎{dislike}</button>
            </div>
        </>
    )
}
export default FourthCode;