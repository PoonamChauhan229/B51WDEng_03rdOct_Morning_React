import { Link } from "react-router-dom"

const Navbar=({cart})=>{
//console.log(cart,setCart)
    const navBarStyle={
        display:"flex",
        justifyContent:"space-between",
        padding:"8px"
    }
   
    return(
        <>
         {/* // inline styling */}
        <div style={{color:"white",height:"40px",width:"100%",backgroundColor:"black",marginBottom:"1%"}}>

           <div style={navBarStyle}>
                <div>
                    <Link to='/'>MoviesFlix</Link>
                </div>
                <div>Cart {cart}</div>
                <div>
                
                <Link to='/addcolor'>Add Color</Link>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Navbar