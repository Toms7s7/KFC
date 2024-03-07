import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './page/menu';
import { createContext, useState } from 'react';
import Cart from './page/compoent/cart';
import Navbar from './page/compoent/navbar';
import CartProduct from './page/compoent/CartProduct ';
import Login from './page/Login';
import Signup from './page/Signup';





function App(props) {


  
const [user, setUser] = useState('')


  const [selectedItems1, setSelectedItems1] = useState([]);

  // const [selectedItems2, setSelectedItems2] = useState([]);
  
  // const [selectedItems3, setSelectedItems3] = useState("");
  
  // const [selectedItems4, setSelectedItems4] = useState("");


  const [cartProducts,setcartProducts] = useState([]);
  return (
   <>
   
   
   
   
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home   selectedItems1 ={selectedItems1}   setSelectedItems1 ={ setSelectedItems1}  user={user}     setuser={setUser}    />}/>
        <Route path="/menu" element={<Menu selectedItems1 ={selectedItems1}   setSelectedItems1 ={ setSelectedItems1}   user={user}     setuser={setUser}     />}/>

        
       
        
        
        
        <Route path='/cart' element={<Cart   selectedItems1 ={selectedItems1}   setSelectedItems1 ={ setSelectedItems1}   cartProducts={cartProducts} setcartProducts={setcartProducts}    user={user}   setuser={setUser}      />}/> 
        
        
         <Route path='/login' element={<Login        setuser={setUser}            />}/>


         <Route path='/signup' element={<Signup    />}/>
          
      
      </Routes>

   </BrowserRouter>
   
   
   
   
   
   
   
   </>
  );
}

export default App;
