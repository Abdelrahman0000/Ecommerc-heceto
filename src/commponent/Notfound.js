import React from 'react'
import {Link} from 'react-router-dom'
export default function Notfound() {
  return (
   <div className="notfound">
    <img src="/image/not.png" alt="" />
  <Link to='/' style={{display:'flex' , justifyContent:'space-around'}}>  <button className="btn1">Back To Home</button> </Link>
   </div>
  )
}
