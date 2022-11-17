import React from 'react'
import Curentpage from './Curentpage';

import data from '../data2';
import Allimg from './allimg';
import Pageinner from './pageinner';
export default function Page({setdetail , cart ,handelevent}) {
  return (
    <>
    <Curentpage titel={'Shop Grid Default'} allpage={'Home.Pages.'} current={'Shop Grid Default'} />
<section className='page'>
<h2 className='h-left'>Ecommerce Acceories & Fashion item </h2>
<p className='p-left'>About 9,620 results (0.62 seconds)</p>
<div className="box-container">

{data.map((item)=> 
<Pageinner item={item} key={item.id} setdetail={setdetail} cart={cart} handelevent={handelevent}/>
)}
</div>

</section>
<Allimg />
</>
  )
}
