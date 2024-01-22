import React, { useContext } from 'react'
import Maincontext from '../Context/Context'

function Basket() {
    const {basket,decreaseBtn,increaseBtn,removefromBasket}=useContext(Maincontext)
  return (
    <div>
   
    <table class="table">
  <thead>
    <tr>
      <th scope="col">nmae</th>
      <th scope="col">Price</th>
      <th scope="col">incres</th>
      <th scope="col">count</th>
      <th scope="col">decrese</th>
      <th scope="col">totalPrice</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
  {
    basket.map((item,index)=>{
        return(
            <tr key={index}>
            <th scope="row">{item.product.name}</th>
            <td>{item.product.price}</td>
            <td><button onClick={()=>{
                increaseBtn(item)
            }}>incrfease</button></td>
            <td>{item.count}</td>
            <td><button onClick={()=>{
                decreaseBtn(item)
            }}>decrese</button></td>
            <td>{item.totalPrice}</td>
            <td><button onClick={()=>{
                removefromBasket(item)
            }}>delete</button></td>
          </tr>
        )
    })
  }
  </tbody>
  </table>  
    
    </div>
  )
}

export default Basket