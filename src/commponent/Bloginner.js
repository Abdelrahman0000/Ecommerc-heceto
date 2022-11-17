import React from 'react'

import {FaPenFancy} from'react-icons/fa'
import {BiClipboard} from 'react-icons/bi'
import {Link} from 'react-router-dom'
export default function Bloginner({blog}) {
  return (
    <section className="boxer">
      
    <div className="image"><img src={blog.image} alt="" /></div>
  <div className="content">
  <div className="ico my-row">  <p ><FaPenFancy style={{color:'#FB2E86'}}/> Surfauxion</p>      <p ><BiClipboard style={{color:'#FFA454'}} /> OCTOBER 1, 2020</p>   </div>
    <h1>{blog.name}</h1>
  <p className="my-p">{blog.Text}</p>
  <p className="my-p">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.</p>
  
  
  
  </div>
  
<section className="the-galery my-row">
<div className="box">
  <div className="image">
    <img src="/image/bloi1.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Quam sed</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>
<div className="box">
  <div className="image">
    <img src="/image/bloi2.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Tristique sed</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>

<div className="box">
  <div className="image">
    <img src="/image/bloi3.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>A etiam</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>
<div className="box">
  <div className="image">
    <img src="/image/bloi4.png" alt="" />
  </div>
  <div className="inner">
    <p className="my-row"><p>Mi nisi</p> <img src="/image/star.png" alt="" />  </p>
    <p>$43.00</p>
  </div>
</div>




</section>
<p className="my-p">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.</p>
  

<div className="my-row myimg" style={{gap:'1rem'}}>
<img src="/image/vid.png" alt="" />
<img src="/image/gir.png" alt="" />
</div>
<p className="my-p" style={{marginTop:'2rem'}}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum a deserunt quae, fugiat doloremque veritatis harum, quisquam reprehenderit debitis eum aut. Aut, ipsam possimus ea quis reprehenderit animi rerum.</p>
  
  </section>
  )
}
