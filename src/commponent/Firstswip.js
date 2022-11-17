import React, { useState,useEffect } from 'react'
import {AiOutlineHeart ,AiOutlineShoppingCart } from 'react-icons/ai'
import {BsZoomIn} from 'react-icons/bs'
import {Link} from 'react-router-dom'
export default function Firstswip({item , setdetail , cart,handelevent}) {
  const [show,setshow]=useState(false)
  useEffect(()=>{

    for(let i=0; i<cart.length; i++){
      if(cart[i].id===item.id){
        setshow(true)
  
      }
      
      }


  },[cart.length])
  const handelaradd =(idt)=>{
    handelevent();
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
          console.log('done',num);
          cart.push({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , id:`${item.id}`, oldprice:`${item.oldprice}`})
        
        }
        }
        console.log(cart)
        }

  return (
    <div className='Featured'>
        <div className="image">
            <div className="icon">
                <div className="my-row">
<p onClick={()=>handelaradd(item.id)}  style={{color:show&&'#fff',backgroundColor:show&&'#FB2E86'}} > <AiOutlineShoppingCart /> </p>
<p><AiOutlineHeart  /></p>
<Link to='/product'> <p onClick={()=>setdetail({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , id:`${item.id}`, oldprice:`${item.oldprice}`})}><BsZoomIn/> </p></Link>
</div>
            </div>
            <img src={item.image} alt="" />

            <Link to='/product'>     <button className='btn1' onClick={()=>setdetail({name:`${item.name}` ,image:`${item.image}` , price:`${item.price}` , id:`${item.id}`, oldprice:`${item.oldprice}`})}>View Details</button> </Link>
        </div>

        <div className="inner">
            <h2>{item.name}</h2>
<div className="my-row">
<div className="my-color" style={{backgroundColor:'#05E6B7'}}></div>
<div className="my-color" style={{backgroundColor:'#F701A8'}}></div>
<div className="my-color color3" style={{backgroundColor:'#00009D'}}></div>

</div>
<p> {item.code}</p>
<p>{item.price}</p>
        </div>
    </div>
  )
}
