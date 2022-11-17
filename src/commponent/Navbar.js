import React,{useState} from 'react'
import {AiOutlineMail ,AiOutlineHeart ,AiOutlineShoppingCart ,AiOutlineBars} from 'react-icons/ai'
import {BsFillTelephoneFill ,BsSearch} from 'react-icons/bs'
import {NavLink ,Link} from 'react-router-dom'

import {RiArrowDownSLine} from 'react-icons/ri'



export default function Navbar() {
  const  [lang ,setlang]=useState('English');
  const  [pay ,setpay]=useState('USD');
  const [activ , setactive]=useState(false);
  
  return (
    <>
    <body onClick={()=>setactive(false)} >
      
    </body>
    <div className='main'>
<div className="nav1 my-row section">

<div className="nav-l my-row">

<h2><AiOutlineMail /> khlyftbdh5@gmail.com</h2>
<h2><BsFillTelephoneFill /> +201098253130</h2>

</div>

<ul className='my-row'>

<li className='my-l1'> <h2 className='my-h1'>{pay}<RiArrowDownSLine /> </h2> 
<ul className='my-u1'>
    <li onClick={()=>setpay('EG')}><h2> EG </h2></li>
    <li onClick={()=>setpay('USD')}> <h2>USD </h2></li>
</ul>
 </li>





 <li> <Link to={'/cart'}> <h2 className='ico'><AiOutlineShoppingCart />  </h2> 
</Link>
 </li>
</ul>
</div>
<div className="all-fix" onClick={()=>setactive(false)} style={{display:activ==false&&'none'}}>
<div className='my-fix' onClick={()=>setactive(false)} style={{right:activ==false&&'-2000%'}}>
<div className="nav-2 section my-row">
<div className="tite"><h2>Hekto</h2></div>

<ul className='my-row'>
<li><NavLink to='/'> Home </NavLink></li>
<li><NavLink to='/page'>Pages</NavLink></li>

<li><NavLink to='/blog'>Blog</NavLink></li>
<li><NavLink to='/cart'>Shop </NavLink></li>
<li><NavLink to='/about'> About </NavLink></li>
<li><NavLink to='/contact'>Contact </NavLink></li>
</ul>
<form action="">
    <input type="text" placeholder='search' />
    <button className='btn1' > <BsSearch /></button>
</form>
</div>
</div>
</div>
<div className="section my-row all-bars">
<h2>Hekto</h2>
<h2 className='bars' onClick={()=>setactive(true)}><AiOutlineBars /> </h2>
 </div>
    </div>
    </>
  )
}
