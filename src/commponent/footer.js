import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram ,FiTwitter} from 'react-icons/fi'

export default function ooter() {
  return (
    <>
    <section className="footer">
  <div className="box-container my-row">
    <div className="box">
        
      <h3> Hekto</h3>
      <form action="">
        <input type="email" placeholder="Enter your email" className='email' />
        <input type="button" value="subscribe" className='btn1' />
      </form>
      <p>Contact Info</p>
      <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
   
    </div>
      <div  className="box">
        <h3>Catagories</h3>
  <a className='link'>Laptops & Computers</a>
  <a  className='link'>Cameras & Photography</a>
  <a  className='link'>Smart Phones & Tablets</a>
  <a  className='link'>Video Games & Consoles</a>
  <a className='link'>Waterproof Headphones</a>
    </div>
    <div  className="box"><h3>Customer Care</h3>
    <a  className='link'>My Account</a>
    <a  className='link'>Discount</a>
    <a className='link'>Returns</a>
    <a  className='link'>Orders History</a>
    <a className='link'>Order Tracking</a>
    </div>
    <div  className="box"><h3>Pages</h3>
    <a  className='link'>Blog</a>
    <a  className='link'>Browse the Shop</a>
    <a className='link'>Category</a>
    <a  className='link'>Pre-Built Pages</a>
    <a className='link'>Visual Composer Elements</a>
    <a className='link'>WooCommerce Pages</a>
    </div>
  </div>
 
</section>
<div className="the-end my-row">
<p>©khalifa- All Rights Reserved</p>
<div className='share my-row'>
<p><BsFacebook /></p>
<p><FiInstagram/></p>
<p><FiTwitter/></p>
</div>
 </div>
 </>
  )
}
