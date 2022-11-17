import React from 'react'
import {Link} from 'react-router-dom'
export default function Not() {
  return (
   <div className="notfound">
    <img src="/image/not.png" alt="" />
    <h2 className='main-title'>Log in First !!!!</h2>
  <Link to='/' style={{display:'flex' , justifyContent:'space-around'}}>  <button className="btn1">Signup</button> </Link>
   </div>
  )
}
