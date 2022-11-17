import React,{useState} from 'react'
import Allimg from './allimg'
import Curentpage from './Curentpage'
import {Link} from 'react-router-dom'
export default function Signin({setuser}) {
const [password,setpassword]=useState('');
const [email,setemail]=useState('')
const Handelarsum=(e)=>{
e.preventDefault()

if(password.length>7){
    setuser(email);
}

}

  return (
    <div className="main-s">
        <Curentpage titel={'My Account'} allpage={'Home.Page.'} current={'My Account'} />
    <div className='main-form'>
        <form action="" onSubmit={Handelarsum}>
<h2>Login</h2>
<p>Please login using account detail bellow.</p>

<input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder=' Email Address' />

<input type="Password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder=' Password' />
<p className='myp'>Forgot your password?</p>
 <button className='btn1'>Sign in</button>
<Link to='/'> <p>Don’t have an Account?<span style={{color:'#FB2E86'}}> Create account </span></p> </Link>
        </form>
    </div>
    <Allimg/>
    </div>
  )
}
