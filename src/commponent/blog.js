import React from 'react'
import {FaPenFancy} from'react-icons/fa'
import {BiClipboard} from 'react-icons/bi'
import {Link} from 'react-router-dom'
export default function Blog() {
  return (
  
<section className="blog">
  <h1 className="main-title">our blog & article</h1>
  <div className="box-contaier">
    <div className="box">
      <Link to='/blog' >
      <div className="image"><img src="image/blog1.png" alt="" /></div>
    <div className="content">
    <div className="ico my-row">  <p ><FaPenFancy style={{color:'#FB2E86'}}/> Surfauxion</p>      <p ><BiClipboard style={{color:'#FFA454'}} /> OCTOBER 1, 2020</p>   </div>
      <h1>Top esssential Trends in 2021</h1>
    <p className="my-p">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
    </div>
    <div className="main">
     
          <h4 className="col-auto">read more</h4>
      
       

      </div>
      </Link>
    </div>
  
    <div className="box">
      <Link to='/blog'>
      <div className="image"><img src="image/blog2.png" alt="" /></div>
    <div className="content">
    <div className="ico my-row">  <p ><FaPenFancy style={{color:'#FB2E86'}}/> Surfauxion</p>      <p ><BiClipboard style={{color:'#FFA454'}} /> OCTOBER 1, 2020</p>   </div>
       <h1>Top esssential Trends in 2021</h1>
      <p className="my-p">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
  
    </div>
    <div className="main">
     
      <h4 className="col-auto">read more</h4>
  
   

  </div>
      </Link>
    </div>
  
  
    <div className="box">
      <Link to='/blog' >
      <div className="image"><img src="image/blog3.png" alt="" /></div>
    <div className="content">
    
    <div className="ico my-row">  <p ><FaPenFancy style={{color:'#FB2E86'}}/> Surfauxion</p>      <p ><BiClipboard style={{color:'#FFA454'}} /> OCTOBER 1, 2020</p>   </div>
       <h1>Top esssential Trends in 2021</h1>
    <p className="my-p">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>

    </div>
    <div className="main">
     
      <h4 className="col-auto">read more</h4>
  
   

  </div>
      </Link>
    </div>
  
  
  </div>
  
  </section>
  )
}
