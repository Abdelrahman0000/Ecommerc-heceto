import React, { useEffect, useState } from 'react'
import Cartinner from './Cartinner'
import {Link} from 'react-router-dom'
import Curentpage from './Curentpage';
export default function Cart({cart , setcart}) {
  const [idt,setidt]=useState(null);
  const [it,setit]=useState(cart);
  useEffect(()=>{
  
  let num='0';
  
  console.log(cart)
  //       if(cart.length===0){
  //       return null ;
  //       }
  //      else{
      
  //     for(let i=0; i<cart.length; i++){
  //     if(cart[i].id===idt){
      
  // console.log(cart)
  //     cart[i]=null;
          
  //     }
      
  //     }
  // }
  const cart2 =cart.filter(function(item) {
      return item.id !== idt
  })
  setcart(cart2)
  console.log(cart)
      
  },[idt])
  return (
    <>
    <Curentpage titel={'Shopping Curt'} allpage={'Home.Page.'} current={'Shopping Curt'}/>
    {cart.length>=1?
    <section className="cart my-row">
     
      <div className="left">
        <div className="desc-tit my-row"><p className='l-p1'>Product</p> <p>Price</p> <p>Quantity</p> <p>Total</p> </div>
        {
          cart.map((item)=>
          <Cartinner item={item}  setidt={setidt} key={item.id} />
          )
        }
          <div className="my-row">
  
 
         <Link to='/'><button className='btn1'>Update </button> </Link>
    <button className='btn1' onClick={()=>setcart([])}>Clearup </button>
      </div>
      </div>
      <div className="right my-col">
<div className="cart-1">
  <h1>Cart Totals</h1>
  <div className="inner">
<div className="my-row">
  <h2>Subtotals:</h2>
  <p>‎£219.00</p>
</div>
<div className="my-row">
  <h2>Totals:</h2>
  <p>‎£315.00</p>
</div>
<h3>Shipping & taxes calculated at checkout</h3>
<Link to='/done' > <button className="btn1">Proceed To Checkout</button> </Link>
</div>
</div>
<div className="cart-2">
  <h1>Calculate Shopping</h1>
  <div className="inner">
<input type="text" placeholder='Bangladesh' />
<input type="text" placeholder='Mirpur Dhaka - 1200' />
<input type="text" placeholder='Postal Code' />
 <Link to='/done' > <button className="btn1">Calculate Shiping</button> </Link>
</div>
</div>
      </div>
    </section> : <h2 className='main-title' style={{margin:'4rem 0'}}>You have not added any product yet</h2>
}
      </>
  )
}
