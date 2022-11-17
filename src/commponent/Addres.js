import React,{useState} from 'react'
import Curentpage from './Curentpage'

import {Link} from 'react-router-dom'
export default function Addres({setuser}) {
const [email , setemail]=useState()
  return (
    <>
    <Curentpage titel={'Sign Up'} />
   <section className="addres my-row">
<div className="right">
<div className="my-row">
    <h2>Contact Information</h2>
   <Link to='/signin'> <p style={{color:'#FB2E86'}}>Already have an account?</p> </Link>
</div>
<input type="email" placeholder='Contact Information Enter Email' value={email} onChange={(e)=>setemail(e.target.value)} />
<div className="inner">
<h2>Shipping address</h2>
    <div className="my-row">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='last name' />
    </div>
    <input type="text" placeholder='Address' />
    <input type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' />
    <input type="text" placeholder='City' />
    <div className="my-row">
        <input type="text" placeholder='Bangladesh' />
        <input type="text" placeholder='Postal Code' />
    </div>
    <button onClick={()=>setuser(email)} className='btn1'>Continue Shipping</button>
</div>
</div>

   </section>
   </>
  )
}
