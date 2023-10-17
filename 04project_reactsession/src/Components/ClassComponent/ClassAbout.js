// const xyz=()=>{
//     return(

//     )
// }
// export default xyz;
import axios from 'axios'
import React from 'react'


class ClassAbout extends React.Component{
    // constructor
    constructor(props){
        super(props)
        //state variable
        this.state={
            count:0,
            count1:0,
            userInfo:{
                name:"Dummy Name",
                login:"Login UserName",
            }
        }
        console.log("Child Constructor Called")
    }

    async componentDidMount(){
        // Best place to make an API call
        // git hub profile
        // const data=await fetch(`https://api.github.com/users/poonamchauhan229`)
    //     const response= await axios.get(`https://api.github.com/users/poonamchauhan229`)
    //    // console.log(response.data)
    //     // update it to the state varaibale
    //     this.setState({
    //         userInfo:response.data
    //     })
        this.setState({
            userInfo:{
                name:"Poonam",
                login:"poonam229"
            }
        })
        this.timer=setInterval(()=>{
            console.log("1000")
        },1000)
        console.log("Child Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Child Component Did Update")
    }
    
    componentWillUnmount(){
        console.log("Child Component WillUnmount")
        clearInterval(this.timer)
    }
render(){
    console.log(" Child Render Method")
    return(
        <>
        <hr/>
        <hr/>
        <h4>{this.state.userInfo.name}</h4>
        <h4>{this.props.name}</h4>

        {/*  */}
        
        <h1>Github User Details</h1>
        {/* <h2><img src={this.state.userInfo.avatar_url} alt="" /></h2> */}
        <h3>{this.state.userInfo.name}</h3>
        <h1>{this.state.userInfo.login}</h1>
        </>
    )
}
}
export default ClassAbout;