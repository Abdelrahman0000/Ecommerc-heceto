import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
export default function Cartinner({item,setidt }) {
const [nam,setnam]=useState(1)

  return (
    <div className="inner my-row">
<div className="image"> <AiOutlineClose onClick={()=>setidt(item.id)} className='pos1' /> <img src={item.image} alt="" /> <div className="my-col"><h2>{item.name}</h2> <p>ColorBrowen</p> <p>size</p> 
  <p className='make-n'><span>Price :</span> {item.price}</p>
 <p className='my-row make-n'><span>Quantity :</span> <input type="number" onChange={(e)=>setnam(e.target.value)} min='1' value={nam} /> </p>
  <p className='make-n'><span>Total :</span> ‎£219.00</p> </div>  </div>
  
  <p className='make-n2'> {item.price}</p>
 <p className='my-row make-n2'> <input type="number" onChange={(e)=>setnam(e.target.value)} min='1' value={nam} /> </p>
  <p className='make-n2'> ‎£219.00</p>

    </div>
  )
}
