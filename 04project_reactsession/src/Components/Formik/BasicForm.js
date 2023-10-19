import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'

const BasicForm = () => {
  const formValidationSchema=yup.object({
    email:yup.string().min(8,"Too small").email(),
    password:yup.string().required().min(5)
  })

  const formik=useFormik({
    initialValues:{
      email:"guvi@gmail.com",
      password:"123456"
    },
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log(values)
    }

  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" name="email" id="email" value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email? formik.errors.email:""}
      <input type="password" name="password" id="password" value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.errors.password}
      <button type='submit'>Submit</button>
      <br/>
      {JSON.stringify(formik.values)}<br/>
      {JSON.stringify(formik.touched)}
    </form>
  )
}

export default BasicForm