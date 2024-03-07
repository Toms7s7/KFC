import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import'./overlayer.css';

const CartProduct = (props)=>{


    const [qty,setQty] = useState(1);

    const [cartTotal,setCartTotal] = useState(0);
  
  
  
  
    const calulateCartValue = ()=>{
      var total = 0;
     for(var i=0;i<props.selectedItems1.length;i++)
     {
        total = total + props.selectedItems1[i].price;   
     }
     setCartTotal(total);
  }
  
  
  
  useEffect(()=>{
  
  
  
  
  
  
    calulateCartValue()
  
  
  
  
  },[])
  
  
  
  
  
  
  
//   start
  
  
  
  
    const  AddToCart = (ADD)=>{


      const updatedItems = props.selectedItems1.map((selectedItem) => {
        if (selectedItem === ADD) {
            return {
                ...selectedItem,
                quantity: selectedItem.quantity + 1
            };
        }
        return selectedItem;
    });
    props.setSelectedItems1(updatedItems);













      setQty(ADD.quantity+qty)

console.log(ADD.quantity)
    
   var total1 =  ADD.price

   

   
      
  
   setCartTotal(total1+cartTotal);
  
      console.log(total1 + cartTotal)
      
    
  }
  
  
  const removeItemFromcart = (REMOVE)=>{
    if(REMOVE.quantity > 0)
    {


      const updatedItems = props.selectedItems1.map((selectedItem) => {
        if (selectedItem === REMOVE) {
            return {
                ...selectedItem,
                quantity: selectedItem.quantity - 1
            };
        }
        return selectedItem;
    })
    props.setSelectedItems1(updatedItems);
}
      
  
  
      var total1 =  REMOVE.price
      
  
   setCartTotal(total1 - cartTotal  );
  
      console.log(total1 + total1 - cartTotal)
      
    
    }
  
  
  
  
      const RemoveProduct = ( (Remove)=>{
  
  
  return  props.setSelectedItems1(props.selectedItems1.filter((R)=> R !== Remove
  
  ))
  
  
        })
     

return(

<>


<div className="container-fluid  shadow bg-transparent "    style={{backgroundColor:"CaptionText"}} >




<h1 className="text-dark fs-1 fw-bold shadow " style={{fontFamily:"cursive"}} ><u>YOUR FOOD CART</u></h1>


<div className="container-fluid d-flex justify-content-center  gap-5 bg-transparent  "  >
<div className="col-4 p-4  ">


<div className="card  p-4 border border-5 border-dark  mt-4  bg-light sticky-top  shadow" >
              <h4 className="text-dark fs-1 fw-bold">Summary : </h4>
              <hr className="border border-2 border-dark fw-bold"/>
              <p className="text-dark fw-bold">Sub total :$ {cartTotal}</p>
              <p className="text-dark fw-bold">GST :  $ {18*cartTotal/100}</p>
              <hr className="border border-2 border-dark"/>
              <p className="fs-1 text-dark fw-bold">Total : $ {cartTotal + 18*cartTotal/100}</p>
              <Link className="btn btn-danger" to="/checkout">Checkout</Link>
          </div>

       
          </div>

          <div >


{ props.selectedItems1.map((item,index)=>{

return(

<>
<div className=" d-flex  justify-content-between  bg-danger   mt-5  rounded-pill shadow " key = {index}  style={{backgroundColor:"white"}}  >

<img src={item.Image} className="  text-dark rounded-pill " alt=""  style={{width:"150px"}}/>

<p className="p-2 fw-bold fs-3 text-dark"  ><u>{item.title}</u></p>

<h5 className="ps-2 pt-5 fw-bold text-dark fw-bold fs-3">${item.price}</h5>

<span className="p-2 pt-4 ps-4 text-dark fw-bold fs-5">{item.description}</span>


<div className="d-flex h-25">
  <button className="btn btn-lg p-3  mt-3 ms-3 fw-bold fs-3  border border-3 border-dark"value={1} onClick={ ()=>   AddToCart(item)  }>+</button>
       <p className=" mt-4 ps-2 pt-2 text-darkfw-bold fs-3">{item.quantity}</p>
       <button className="btn btn-lg  p-3 mt-3 ms-3 fw-bold fs-3  border border-3 border-dark"   onClick={ ()=>   removeItemFromcart(item)  } >-</button>
  </div>



<button className="h-25 m-5 btn btn-danger  border border-1 border-dark mb-2  border border-3 border-dark " type="button" onClick={()=> RemoveProduct(item)} style={{fontFamily:"cursive"}} >REMOVE</button>

</div>
</>
)
})}

</div>

       

</div>

</div>



</>





)



}


export default CartProduct 