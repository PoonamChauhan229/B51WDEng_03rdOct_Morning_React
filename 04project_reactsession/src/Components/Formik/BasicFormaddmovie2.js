import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup'
import TextField from '@mui/material/TextField';
import { url } from "../../utils/constants";


const AddMovieFormik=()=>{
    const formValidationSchema=yup.object({
       name:yup.string().required("Fill the correct feild?"),
       poster:yup.string().required("Fill the correct feild?"),
       rating:yup.number().required("Fill the correct feild?").min(1).max(10),
       summary:yup.string().required("Fill the correct feild?")
      })
    const formik=useFormik({
        initialValues:{
          name:"",
          poster:"",
          rating:"",
          summary:""
        },       
        validationSchema:formValidationSchema,
        onSubmit:(newMovie)=>{
          console.log(newMovie)
          addToMovieList(newMovie)
        }
    
      })
   
    const navigate=useNavigate()
    const addToMovieList=(movie)=>{
        console.log(movie)
        // API call
        fetch(url,{
            method:"POST",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
   
    return(
        <form onSubmit={formik.handleSubmit} style={{marginBottom:"10px"}}>
    
        {/* Poster */}
        <label>Poster:</label>
        <input type="text" value={formik.values.poster} name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        /> 
        {formik.touched.poster && formik.errors.poster? formik.errors.poster:""}
        <br/>
        {/* Name */}
        <label>Name:</label>
        <input type="text" value={formik.values.name} name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name? formik.errors.name:""}
         <br/>
        {/* Rating */}        
        <label>Rating:</label>
        <input type="text" value={formik.values.rating} name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        /> 
        {formik.touched.rating && formik.errors.rating? formik.errors.rating:""}
        <br/>

        {/* Summary */}
        <label>Summary:</label>
        <input type="text" value={formik.values.summary} name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        /> 
        {formik.touched.summary && formik.errors.summary? formik.errors.summary:""}
        <br/>
        

        <br/>
        <Button type="submit" variant="contained">Add Movie</Button>
        <Button onClick={()=>navigate('/')}variant="contained">Back</Button>

   </form>
    )
}
export default AddMovieFormik
