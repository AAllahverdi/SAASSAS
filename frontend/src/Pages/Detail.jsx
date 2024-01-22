import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
  const [detail,setdetail]=useState([])
  const {id}=useParams()
  useEffect(() => {
  axios.get(`http://localhost:8000/pato/${id}`).then(res=>{
    setdetail(res.data)
  })
  }, [])
  return (
    <div>
  
  <img src={detail.image} alt=""/>
    
    </div>
  )
}

export default Detail