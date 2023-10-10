import { useState } from "react";
import ColorBox from "./ColorBox";

const AddColor=()=>{
    const [colorVal,setColorVal]=useState("green")
    const [colorList,setColorList]=useState([colorVal])
   // console.log(colorList)
    const inputStyle={
        backgroundColor:colorVal,
        margin:"30px 5px 0px 100px",
        height:"20px",
        borderRadius:"10%",
        width:"180px"
    }
    return(
        <>
        <div style={{marginBottom:"10px"}}>
            <input type="text" value={colorVal}
            style={inputStyle}
            onChange={(e)=>setColorVal(e.target.value)}
            />
            <button
            onClick={()=>{      
                setColorList([...colorList,colorVal])
            }}
            
            >Add Color</button>
        </div>

     {
        colorList.map((element,index)=> <ColorBox color={element} key={index}/>)
     }
        </>
    )
}
export default AddColor;