import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Maincontext from '../Context/Context';
function Add() {
 
    const {data,setData,handlerSerch,deleteddata}=useContext(Maincontext)
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
          image: '',
          price: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          desc: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
         image: Yup.string()
            .required('Required'),
        price: Yup.string()
            .required('Required'),
           
         
        }),
        onSubmit: async(values) => {
        await axios.post("http://localhost:8000/pato/",values).then(res=>{
            setData([...data,res.data])
         })
        },
      });
  return (
    <div>
    <div>
      
    <form onSubmit={formik.handleSubmit}>
   

    <label htmlFor="name">name</label>
    <input
      id="name"
      name="name"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name ? (
      <div>{formik.errors.name}</div>
    ) : null}

    <label htmlFor="desc">desc</label>
    <input
      id="desc"
      name="desc"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.desc}
    />
    {formik.touched.desc && formik.errors.desc ? (
      <div>{formik.errors.desc}</div>
    ) : null}

    <label htmlFor="image"> image</label>
    <input
      id="image"
      name="image"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.image}
    />
    {formik.touched.image && formik.errors.image ? (
      <div>{formik.errors.image}</div>
    ) : null}

    <label htmlFor="price"> price</label>
    <input
      id="price"
      name="price"
      type="number"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.price}
    />
    {formik.touched.price && formik.errors.price ? (
      <div>{formik.errors.price}</div>
    ) : null}

    <button type="submit">Submit</button>
  </form>
    </div>
    <div>
    <input type="text" placeholder='serch' onChange={(e)=>{
      handlerSerch(e)
    }}/>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">nmae</th>
        <th scope="col">Price</th>
        <th scope="col">desc</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((item,index)=>{
        return(
          <tr>
          <th scope="col">{item.name}</th>
          <th scope="col">{item.price}</th>
          <th scope="col">{item.desc}</th>
          <th scope="col"><button onClick={()=>{
            deleteddata(item._id)
          }}>delete</button></th>
        </tr>
        )
      })
    }
    </tbody>
    </table>
    </div>
    </div>
  )
}

export default Add