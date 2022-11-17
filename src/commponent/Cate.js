import data from '../data'
import {Link} from 'react-router-dom'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import  {Swiper,SwiperSlide}  from "swiper/react";

import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Cate() {
    
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
    <> <section className="cate">
    <h2 className='main-title'>Top Categories</h2>
  
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
<Link to='/page'>
 <div className='box'>
    <div className="image">
                   <img src={item.image} alt="" />
 
               </div>
 
    <div className="inner">
        <h2>{item.name}</h2>
        
 <p>{item.price}<span>{item.oldprice}</span></p>
    </div>
 </div>
 </Link>
 
</SwiperSlide>
)
}
</Swiper>
    </section>
    </>
  )
}
