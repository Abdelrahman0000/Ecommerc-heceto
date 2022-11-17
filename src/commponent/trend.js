import React from 'react'
import {Link} from 'react-router-dom'
export default function Trend() {
  return (
   <> <section className="trend">
   <h2 className='main-title'>What Shopex Offer!</h2>
   <div className="box-containe">
   <div className='box'>
   <div className="image">
                  <img src='/image/ch13.png' alt="" />

              </div>

   <div className="inner">
       <h2>Cantilever chair</h2>

       <p>$26.00 <span>$42.00</span></p>
   </div>
</div>
<div className='box'>
   <div className="image">
                  <img src='/image/ch12.png' alt="" />

              </div>

   <div className="inner">
       <h2>Cantilever chair</h2>
       
<p>$26.00 <span>$42.00</span></p>
   </div>
</div>
<div className='box'>
   <div className="image">
                  <img src='/image/ch11.png' alt="" />

              </div>

   <div className="inner">
       <h2>Cantilever chair</h2>
       
<p>$26.00 <span>$42.00</span></p>
   </div>
</div>
<div className='box'>
   <div className="image">
                  <img src='/image/ch8.png' alt="" />

              </div>

   <div className="inner">
       <h2>Cantilever chair</h2>
       
<p>$26.00 <span>$42.00</span></p>
   </div>
</div>


   </div>
</section>
<section className="tren-2">
<div className="my-row">
   <div className='box'>
   <div className="image">
                  <img src='/image/clock.png' alt="" />

              </div>

              <div className="my-fix1">
   <div className="inner">
       <h2>23% off in all products</h2>
       
       <Link to='/page'><p>Shop Now</p> </Link>
   </div>
</div>
</div>

<div className='box'>
   <div className="image">
                  <img src='/image/tabe.png' alt="" />

              </div>
<div className="my-fix1">
   <div className="inner">
       <h2>23% off in all products</h2>
       
       <Link to='/page'><p>View Collection</p></Link>
   </div>
</div>
</div>

<div className="my-col">
    <div className="small-box my-row">
<img src="/image/ch15.png" alt="" />
<p>Executive Seat chair
$32.00</p>
    </div>

    <div className="small-box my-row">
<img src="/image/ch16.png" alt="" />
<p>Executive Seat chair
$32.00</p>
    </div>

    <div className="small-box my-row">
<img src="/image/ch17.png" alt="" />
<p>Executive Seat chair
$32.00</p>
    </div>
</div>



   </div>
</section>

</>
  )
}
