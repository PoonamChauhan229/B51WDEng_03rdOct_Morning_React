import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup'
import TextField from '@mui/material/TextField';


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
        fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies`,{
            method:"POST",
            body:JSON.stringify(movie),
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
   
    return(
        <form onSubmit={formik.handleSubmit} style={{marginBottom:"10px"}}>
      
        
        <div style={{margin:"0px 30px 0px 30px"}}>
        <TextField
            sx={{width:"50%"}}
            id="poster"
            label="Poster"          
            variant="standard"
            value={formik.values.poster} name="poster"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
         {formik.touched.poster && formik.errors.poster? formik.errors.poster:""}
        </div>

        <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
            sx={{width:"50%"}}
            id="name"
            label="Name"          
            variant="standard"
            value={formik.values.name} name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name? formik.errors.name:""}
        </div>

        <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
            sx={{width:"50%"}}
            id="rating"
            label="Rating"          
            variant="standard"
            value={formik.values.rating} name="rating"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating? formik.errors.rating:""}
        </div>

        <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
            sx={{width:"50%"}}
            id="summary"
            label="Summary"          
            variant="standard"
            value={formik.values.summary} name="summary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.summary && formik.errors.summary? formik.errors.summary:""}
        </div>
        
        <div style={{margin:"5px 30px 0px 30px"}}>
        <Button type="submit" variant="contained" style={{margin:"0px 30px 0px 30px"}}>Add Movie</Button>
        <Button onClick={()=>navigate('/')}variant="contained">Back</Button>
        </div>
        {/* Trailer */}
        </form>
    )
}
export default AddMovieFormik
