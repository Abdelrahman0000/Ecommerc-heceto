import React from 'react'
import Curentpage from './Curentpage'

export default function Conntact() {
  return (
    <>
    <Curentpage titel={'Contact'} allpage={'Home.Page'} current={'Contact'} />
    <section className="contect">
<div className="my-row row2 rowt"><div className="right">
  <h2>Information About us</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
<div className="my-row row1">
<div className="my-color" style={{backgroundColor:'#05E6B7'}}></div>
<div className="my-color" style={{backgroundColor:'#F701A8'}}></div>
<div className="my-color color3" style={{backgroundColor:'#00009D'}}></div>

</div>
  </div> 
  <div className="left">
  <h2>Contact Way</h2>
    <div className="my-row">

  <h3>Tel: 877-67-88-99
E-Mail: shop@store.com</h3>
<h3>Support Forum For over 24hr</h3>
  </div>
  <div className="my-row">

<h3>20 Margaret st, London
Great britain, 3NM98-LK</h3>
<h3>Free standard shipping
on all orders.</h3>
</div>
  </div>
  </div>
<div className="my-row row2" style={{margin:'2rem 0', justifyContent:'space-between'}}>
  <div className="right">
  <h2>Get In Touch</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
 <form action="">
 <div className="my-row">
<input type="text" placeholder=' Your Name' />

<input type="text" placeholder=' Your Email' />
</div>

<input type="text" placeholder=' Subject' />
<textarea name="" id="" cols="30" rows="10"></textarea>
<button className="btn1">Send Mail</button>
</form>
</div>
<div className="left" style={{textAlign:'end'}}><img src="/image/contact.png" alt="" /> </div>
</div>

    </section>
    </>
  )
}
