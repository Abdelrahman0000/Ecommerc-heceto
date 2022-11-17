import React,{useState} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export default function Discount() {

    const [depart,setdepart]=useState('Wood Chair')

  return (
    <div className="descont">
        
<h2 className='main-title'>Featured Products</h2>
<ul className='my-row filter'>
<li onClick={()=>setdepart('Wood Chair')} style={{color:depart==='Wood Chair'&&'#FB2E86'}}>Wood Chair</li>
<li onClick={()=>setdepart('Plastic Chair')}  style={{color:depart==='Plastic Chair'&&'#FB2E86'}}>Plastic Chair</li>
<li onClick={()=>setdepart('Sofa Colletion')} style={{color:depart==='Sofa Colletion'&&'#FB2E86'}}>Sofa Colletion</li>
</ul>

<section className='my-row bg-violt' style={{backgroundColor:'#fff' , paddingTop:'0'}}>
<div className="left">
    
    <h2>New Furniture Collection
Trends in 2020</h2>
<p className="pink1">Best Furniture For Your Castle....</p>
<p className='smal'  style={{margin:'.7rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
   <div className="my-row" style={{margin:'.7rem' , flexWrap:'wrap'}}><p className='smal' ><AiOutlineCheck /> Material  like metals</p> <p className='smal' style={{textAlign:'start' , margin:'auto'}}><AiOutlineCheck /> Material expose like metals</p></div>
   <div className="my-row"  style={{margin:'.7rem', flexWrap:'wrap'}}><p className='smal' ><AiOutlineCheck /> Simple neutral colours.</p> <p className='smal' style={{textAlign:'start' , margin:'auto'}}><AiOutlineCheck />Material expose like metals</p></div>

   <Link to='/page'>    <button className="btn1">Shope Now</button> </Link>
</div>
<div className="right">

{ depart==='Plastic Chair'&&
<>

<img src="/image/shape4.png" alt="" className="shap4" /> 
    <img src="/image/ch10.png" alt="" />
    
</>
}
{ depart==='Wood Chair'&&
    <img src="/image/allch.png" alt="" />
}
{ depart==='Sofa Colletion'&&
<>

<img src="/image/shape4.png" alt="" className="shap4" /> 
    <img src="/image/ch7.png" alt="" />
    </>
}

</div>

    </section>

    </div>
  )
}
