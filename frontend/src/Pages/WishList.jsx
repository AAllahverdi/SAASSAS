import React, { useContext } from 'react'
import Maincontext from '../Context/Context'

function WishList() {
    const {wishList,removeFromWishList}=useContext(Maincontext)
  return (
    <div className='container'>
   <div className='row'>
   <div className='col-lg-4 col-md-6 mb-4 mr-2'>
   {
    wishList.map((item,index)=>{
        return(
            <div class="card" style={{width: "18rem;"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">item.name</h5>
    <p class="card-text">{item.desc}</p>
  <button onClick={()=>{
    removeFromWishList(item)
  }} >delete</button>
  </div>
</div>
        )
    })
   }
   
   </div>
   
   </div>


    </div>
  )
}

export default WishList