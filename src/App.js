import './App.css'
import React,{useEffect, useState} from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './commponent/Navbar';
import Signin from './commponent/Signin';
import Not from './commponent/Not';
import Footer from './commponent/footer';
import Home from './commponent/Home';
import Page from './commponent/Page'
import Conntact  from './commponent/Conntact';
import Product from './commponent/Product';
import Article from './commponent/Blogpage';
import Bloginner from './commponent/Bloginner';
import Cart from './commponent/Cart';
import Done from './commponent/Done';
import Addres from './commponent/Addres';
import Notfound from './commponent/Notfound';
import About from './commponent/About';
import Alert from './commponent/Alert'




function App() {
  const [user,setuser]=useState();
const [detail,setdetail]=useState(null);

const [blog,setblog]=useState(null);
const [cart,setcart]=useState( JSON.parse(localStorage.getItem('cart'))? JSON.parse(localStorage.getItem('cart')):[]);

useEffect(()=>{

  window.localStorage.setItem("vale",user)
},[user])
// const ity=JSON.parse(localStorage.getItem('cart'))
// setcart(ity)

localStorage.setItem('cart',JSON.stringify(cart))

console.log(cart)
  
const [alert,setAlert]=useState({show:false,msg:'',type:''})
const handelevent=()=>{

   showalert(true,'success','item added to list')
 }

//  console.log(cart)
console.log(window.localStorage)
const showalert=(show=false,type='',msg='')=>{
  setAlert({show,msg,type});
}

if(!user){
  const nam=window.localStorage.vale;
   if(nam){
     setuser(nam)
     console.log(nam)
   }
  return(
    <BrowserRouter>
    
    <Navbar  />
    
    
    <Routes >
      
<Route path='/'  element={<Addres setuser={setuser} />} />
      <Route path='/signin' exact element={<Signin setuser={setuser} />} />
      <Route path='*'  element={<Not />} />
         
    </Routes> 
    <Footer />
        
        </BrowserRouter>
  )
}


else{
  
  return (
    <BrowserRouter>
    
<Navbar />
{alert.show&&<Alert removeallert={showalert} />}

<Routes>

  <Route path='/' exact element={<Home setdetail={setdetail} handelevent={handelevent} cart={cart} />} />
  <Route path='/about' element={<About />} />
  <Route path='/page'  element={<Page setdetail={setdetail} cart={cart} handelevent={handelevent} />} />
  <Route path='/product'  element={<Product detail={detail} cart={cart}/>} />
  <Route path='/blog'  element={<Article setblog={setblog} />} />
<Route path='/article' element={<Bloginner blog={blog}/>} />

<Route path='/done'  element={<Done />} />
<Route path='*'  element={<Notfound />} />
  <Route path='/contact' element={<Conntact />} />
  <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>} />
</Routes> 
<Footer />
    
    </BrowserRouter>
  );
}
}








export default App;
