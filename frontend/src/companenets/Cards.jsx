import React from 'react'
import { useContext } from 'react'
import Maincontext from '../Context/Context'
import Card from './Card'

function Cards() {
    const {data}=useContext(Maincontext)
  return (
    <div className='container' style={{marginTop:"30px"}}>
    <div className="row">
    {
        data.map((item,index)=>{
            return(<Card item={item} key={index} />)
        })
    }
        
    </div>
    
    </div>
  )
}

export default Cards