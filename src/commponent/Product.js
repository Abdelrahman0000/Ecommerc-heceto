import React,{useState} from 'react'
import Curentpage from './Curentpage'

import {BsFacebook} from 'react-icons/bs'
import {FiInstagram ,FiTwitter} from 'react-icons/fi'

import {AiOutlineHeart , AiOutlineArrowRight } from 'react-icons/ai'
import Allimg from './allimg'
export default function Product({detail,cart}) {
  
  const [depart,setdepart]=useState('Description')
  console.log(detail)
  const handelaradd =(idt)=>{
    let num='0';
          if(cart.length===0){
            cart.push({name:`${detail.name}` ,image:`${detail.image}` , price:`${detail.price}` , id:`${detail.id}`, oldprice:`${detail.oldprice}`})
            console.log('length')
          }
         else{
        
        for(let i=0; i<cart.length; i++){
        if(cart[i].id===idt){
        
         num='1'
          console.log('yes' , num)
    
        }
        
        }
        if(num==='1'){
          console.log('no');
          return null ;
        }   
        
        else if(num==='0'){
          console.log('done',num);
          cart.push({name:`${detail.name}` ,image:`${detail.image}` , price:`${detail.price}` , id:`${detail.id}`, oldprice:`${detail.oldprice}`})
        
        }
        }
        console.log(cart)
        }
  return (
    <>
    <Curentpage titel={'Product Details'} allpage={'Home.Page.'} current={'Product Details'} />
  
 {detail? <> <section >
<div className='prodinfo my-row'>
<div className="left"><img src={detail.image} /></div>
<div className="right">
  <h2>{detail.name}</h2>
  <div className="my-row my-row1">
    <div className="r-img"> <img src='/image/star.png'  /> </div>
    <p className='r-p1'>{`(22)`}</p>
  </div>
<p className='r-p2'>{detail.price} <span>{detail.oldprice}</span></p>
<p className="r-p3">Color</p>
<p className="r-p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

 <p className="r-p5 my-row" onClick={()=>handelaradd(detail.id)}><p> Add To cart </p><span><AiOutlineHeart /> </span> </p>
 <p className="r-p3">Categories:</p>
 <p className="r-p3">Tags</p>
 <p className="r-p3 my-row">Share <div className='share my-row'>
<p><BsFacebook /></p>
<p style={{backgroundColor:'#FB2E86'}}><FiInstagram/></p>
<p><FiTwitter/></p>
</div></p>

</div>
</div>
    </section>
<section className="desc">
<ul className='my-row filter'>
<li onClick={()=>setdepart('Description')} style={{textDecoration:depart==='Description'&&'underline'}}>Description</li>
<li onClick={()=>setdepart('Additional Info')}  style={{textDecoration:depart==='Additional Info'&&'underline'}}>Additional Info</li>
<li onClick={()=>setdepart('Reviews')} style={{textDecoration:depart==='Reviews'&&'underline'}}>Reviews</li>
<li onClick={()=>setdepart('Video')} style={{textDecoration:depart==='Video'&&'underline'}}>Video</li>
</ul>

{depart==='Description'&&
<div className="box">
<h2>Varius tempor.</h2>
<p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
<h2>More details</h2>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>

</div>
}


{depart==='Additional Info'&&
<div className="box">
<h2>Varius tempor.</h2>
<p>Aliquam dis vulputate vulputaverr .</p>
<h2>More details</h2>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>

</div>
}

{depart==='Reviews'&&
<div className="box">
<h2>Varius tempor.</h2>
<p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
<h2>More details</h2>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>

</div>
}

{depart==='Video'&&
<div className="box">
<h2>Varius tempor.</h2>
<p>Aliquam dis vulputate , mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
<h2>More details</h2>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>
<p className="my-row"> <span><AiOutlineArrowRight/> </span> <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></p>

</div>
}




</section>

<section className="the-galery my-row">
<div className="box">
  <div className="image">
    <img src="/image/person.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Women’s Fashion</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>
<div className="box">
  <div className="image">
    <img src="/image/person2.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Women’s Fashion</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>

<div className="box">
  <div className="image">
    <img src="/image/person3.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Women’s Fashion</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>
<div className="box">
  <div className="image">
    <img src="/image/person4.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Women’s Fashion</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>




</section>
</>:<h1 className='main-title' style={{margin:'5rem 0'}}>Choose item firest</h1>
}
<Allimg />
    </>
  )
}
