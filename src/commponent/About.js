import React from 'react'

import {AiOutlineCheck} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Allimg from './allimg'
import Curentpage from './Curentpage'
import Phox from './phox'
export default function About() {
  return (
   <>
   <Curentpage titel={'About Us'} allpage={'Home.page'} current={'About Us'} />
<section className='my-row bg-violt' style={{backgroundColor:'#fff' , paddingTop:'0' , margin:'2rem 0'}}>
<div className="left">
    
    <h2>Know About Our Ecomerce
Business, History</h2>

<p className='smal'  style={{margin:'.7rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
  
   <Link to='/page'>    <button className="btn1">Shope Now</button> </Link>
</div>
<div className="right">



    



    <img src="/image/ch7.png" alt="" />
    


</div>

    </section>
    <Phox />
    <Allimg />
    </>
  )
}
