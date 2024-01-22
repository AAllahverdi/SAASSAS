import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Maincontext from '../Context/Context'

function Card({item}) {
    const {addToWishlist,AddTobasket}=useContext(Maincontext)
  return (
    <div className='col-lg-4 col-md-6 mb-4 mr-2'>
    <div class="card" style={{width: "18rem;"}}>
    <img src={item.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">{item.price}  AZN</p>
      <button onClick={()=>{
        addToWishlist(item)
      }}>Add to fav</button>
      <button onClick={()=>{
        AddTobasket(item)
      }}>add to basket</button>
        <Link to={`/${item._id}`}><button>detail</button></Link>
     
    </div>
  </div>

    </div>
  )
}

export default Card