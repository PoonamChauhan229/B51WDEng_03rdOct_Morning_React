// const xyz=()=>{
//     return(

//     )
// }
// export default xyz;
import React from 'react'
import ClassAbout from './ClassAbout'

class Classprofile extends React.Component{
    // constructor
    constructor(){
        super()
        //state variable
        this.state={
            count:0,
            count1:0
        }
        console.log(" Parent Constructor Called")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
render(){
    console.log(" Parent Render Method")
    return(
        <>
        <h1>Count:{this.state.count}</h1>
        <h2>Count1:{this.state.count1}</h2>
        <button
        onClick={()=>{
            //we cannot directly mutate our state
            // this.state=something....XXX dont do
            this.setState({
                count:(this.state.count+1),
                count1:(this.state.count1+2)
            })

        }}
        
        >Incre-Count</button>
        <ClassAbout name="Guvi"/>
        </>
    )
}
}
export default Classprofile;