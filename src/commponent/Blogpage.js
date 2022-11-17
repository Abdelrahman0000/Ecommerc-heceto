import React from 'react'
import bloger from '../blogdata';

import {FaPenFancy} from'react-icons/fa'
import {BiClipboard} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Curentpage from './Curentpage';
export default function Article({setblog}) {
  return (
    <>
    <Curentpage titel={'BlogPage'} allpage={'Home.Page'} current={'BlogPage'} />
    <section className="bloger">
  <h1 className="main-title">our blog & article</h1>
  { bloger.map((item)=>
   <Link to='/article' key={item.id}  onClick={()=>{setblog({name:`${item.name}` ,image:`${item.image}` , Text:`${item.Text}` , id:`${item.id}`})}}>  
    <div className="box">
      
      <div className="image"><img src={item.image} alt="" /></div>
    <div className="content">
    <div className="ico my-row">  <p ><FaPenFancy style={{color:'#FB2E86'}}/> Surfauxion</p>      <p ><BiClipboard style={{color:'#FFA454'}} /> OCTOBER 1, 2020</p>   </div>
      <h1>{item.name}</h1>
    <p className="my-p">{item.Text}</p>
    </div>
    <div className="main">
     
    <h4 className="col-auto">read more</h4>  
      
       

      </div>
     
    </div>
    </Link>
  )} 
   
    </section>
    </>
  )
}
