import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct ";
import Navbar from "./navbar";

import './overlayer.css';






const Cart = (props)=>{
    
 
return(
    <>




     <Navbar  selectedItems1 ={props.selectedItems1}   setSelectedItems1 ={ props.setSelectedItems1}    user={ props.user}       setuser={ props.setuser}       /> 

     <div className="card bg-dark text-white ">

   <img src="https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg" className="img-fluid" style={{width:"100%", height:"100%" }} alt="" />
   <img src="https://www.thehansindia.com/assets/KFC(3).jpg" className="img-fluid mt-5" style={{width:"100%", height:"1200px" }} alt="" />
   <img src="https://t3.ftcdn.net/jpg/05/41/62/96/360_F_541629636_RlfZtQI6uIOW9Uj52x6HpczOlFNVps4L.jpg" className="img-fluid" style={{width:"100%", height:"100%" }} alt="" />

     <div
    className="card-img-overlay"  style={{backgroundColor: "",position:"absolute"}}>

        <div className="over-content">


     { props.selectedItems1.length ?

     <CartProduct    selectedItems1 ={props.selectedItems1}   setSelectedItems1 ={ props.setSelectedItems1}  />

    

     : 
     <div className="text-center">
     <h2 className="p-4 text-dark" style={{fontFamily:"cursive"}}><u>Your FOOD CART is empty </u></h2>
     <Link className="btn btn-danger" to="/menu">GO TO THE MENU</Link>
     </div>

    
}

</div>
</div>
</div>
    </>
)






}


export default Cart