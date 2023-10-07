const ThirdCode=(props)=>{
    return(
        <>
            
            <div className="border">
                <img  className="profile-pic" src={props.img} alt="" />
                <h2>Hi, I am {props.name}</h2>
                <h3>My NickName is {props.nickname}</h3>
            </div>
        </>
    )
}
export default ThirdCode;