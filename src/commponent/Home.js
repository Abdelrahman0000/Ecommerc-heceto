
import Firstswip from './Firstswip'
import data from '../data';
import React, { useEffect, useState } from "react";
// Import Swiper React components
import  {Swiper,SwiperSlide}  from "swiper/react";
import Trend from './trend';
import { Pagination } from "swiper";
import {Link} from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Latest from './Latest';
import Phox from './phox';
import Uniqchair from './uniqchair';
import Discount from './discount';
import Cate from './Cate';
import Show from './show';
import Allimg from './allimg';
import Blog from './blog';


export default function Home({setdetail , cart ,handelevent}) {
  
  const [depart,setdepart]=useState('New Arrival')
const [swip,setswip]=useState(4);
useEffect(()=>{
const ll=window.matchMedia("(max-width: 1440px)");

  



const lg=window.matchMedia("(max-width: 1189px)");
const md=window.matchMedia("(max-width: 1009px)");

const xs=window.matchMedia("(max-width: 670px)");
const sx=window.matchMedia("(mix-width: 497px)");



if(ll.matches){
setswip(4)
}
 if(lg.matches){
  setswip(3)
}

if(md.matches){
  setswip(2)
}

if(xs.matches){
  setswip(1.5)
}

if(sx.matches){
  setswip(1)
}

},[])


  return (
    <>
        <section className='my-row bg-violt'>
<div className="left">
    <p className="pink1">Best Furniture For Your Castle....</p>
    <h2>New Furniture Collection
Trends in 2020</h2>
    <p className="smal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</p>
    <button className="btn1"><Link to='/page' style={{color:'#fff'}}> Shope Now </Link></button>
</div>
<div className="right">
    
<img src="/image/shape1.png" alt="" className="shap1" />

<img src="/image/shape2.png" alt="" className="shap2" />
    <img src="/image/ch1.png" alt="" />

    <img src="/image/off.png" alt="" className="off" />
</div>
<img src="/image/lamp.png" alt="" className="lamp" />

    </section>
    <section className='main-fea'>
   <h2>Featured Products</h2>
       <Swiper
        slidesPerView={swip}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper justi  "
      >  
{data.map((item)=> 
  <SwiperSlide  key={item.id} >

<Firstswip item={item} setdetail={setdetail} cart={cart} handelevent={handelevent}  />

</SwiperSlide>
)
}

</Swiper>
</section>

<section className='latest'>
<h2>Leatest Products</h2>
<ul className='my-row filter'>
<li onClick={()=>setdepart('New Arrival')} style={{color:depart==='New Arrival'&&'#FB2E86'}}>New Arrival</li>
<li onClick={()=>setdepart('Best Seller')}  style={{color:depart==='Best Seller'&&'#FB2E86'}}>Best Seller</li>
<li onClick={()=>setdepart('Featured')} style={{color:depart==='Featured'&&'#FB2E86'}}>Featured</li>
<li onClick={()=>setdepart('Special Offer')} style={{color:depart==='Special Offer'&&'#FB2E86'}}>Special Offer</li>
</ul>
<div className="box-container">

{data.map((item)=> item.department===depart?

<Latest item={item} key={item.id} setdetail={setdetail} cart={cart} handelevent={handelevent} />
:null
)}
</div>

</section>
<Phox />
<Uniqchair />
<Trend />
<Discount />
<Cate />
<Show />
<Allimg />
<Blog />
    </>
  )
}
