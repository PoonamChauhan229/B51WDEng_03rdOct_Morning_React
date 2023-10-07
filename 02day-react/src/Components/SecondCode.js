import React from "react";

const SecondCode=(props)=>{
    console.log(props)
    return(
        // {<></>=>react Fragment}
        <React.Fragment>
            <div className="border">
                <img  className="profile-pic" src={props.img} alt="" />
                <h2>Hi, I am :{props.name}</h2>
                <h3>My NickName is:{props.nickname}</h3>
            </div>
        </React.Fragment>
    )
}
export default SecondCode;