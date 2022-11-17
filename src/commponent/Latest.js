import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHeart ,AiOutlineShoppingCart } from 'react-icons/ai'
import {BsZoomIn} from 'react-icons/bs'

export default function Latest({item, setdetail , cart,handelevent}) {
    const [show,setshow]=useState(false)
  useEffect(()=>{

    for(let i=0; i<cart.length; i++){
      if(cart[i].id===item.id){
        setshow(true)
  
      }
      
      }


  },[cart.length])
    // const [num , setnum]=useState('0')
    const handelaradd =(idt)=>{
      handelevent()
let num='0';
      if(cart.length===0){
        cart.push({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , id:`${item.id}`, oldprice:`${item.oldprice}`})
        console.log('length')
      }
     else{
    
    for(let i=0; i<cart.length; i++){
    if(cart[i].id===idt){
    
     num='1'
    

    }
    
    }
    if(num==='1'){
     
      return null ;
    }   
    
    else if(num==='0'){
  
      cart.push({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , id:`${item.id}`, oldprice:`${item.oldprice}`})
    
    }
    }
    
    }
  return (
   
<div className="box"  >
<div className="image">
            <div className="icon">
                <div className="my-row">

 <p onClick={()=>handelaradd(item.id)}  style={{color:show&&'#fff',backgroundColor:show&&'#FB2E86'}} ><AiOutlineShoppingCart /> </p>
<p><AiOutlineHeart /></p>
<Link to='/product'> <p onClick={()=>setdetail({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , oldprice:`${item.oldprice}`})} key={item.id}><BsZoomIn/></p> </Link >
</div>
            </div>
            <img src={item.image} alt="" />

          
        </div>

        <div className="inner">
            <div className="my-row">
                <div className="tite">
            <h2>{item.name}</h2>
</div>
<div className="pric my-row">

<p>{item.price}</p>
<p  className='old'> {item.oldprice}</p>
</div>
        </div>
        </div>
</div>
  )
}
