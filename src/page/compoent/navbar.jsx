import { Link } from "react-router-dom";
import App from "../../App";
import { useEffect, useState } from "react";



const Navbar = (props) => {

    const [hide, sethide]=useState("block")


    const[hide2,sethide2]=useState("none")



    const Remove =()=>{

      props.setuser(null)






    }

 


      useEffect(()=>{


        if(props.user){

          sethide2("block")
          
          }
          else{
          
          sethide2("none")
          
          
          }


        if(props.user){

          sethide("none")
          
          }
          else{
          
          sethide("block")
          
          
          }




      },[props.user])





  return (
    <>
      <nav className=" navbar  d-flex justify-content-between bg-light  "  style={{position:""}}>
        <span className="left_nav ps-4    ">

        <Link  className="text-decoration-none text-dark" to="/" >
          <img
            src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            alt=".."
          />
          </Link>


            <Link  to = "/menu"  className="text-decoration-none"        >  
          <span className="p-5 text-dark fw-bold"> Menu</span>

          </Link>  

          <Link  to = "/cart"  className="text-decoration-none"        > 
<span>    <img  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="" style={{width:"50px"}}/></span>
       
          <span className="text-dark fw-bold">CART {props.selectedItems1.length} </span>

</Link>

        </span>

        <span className="right_nav p-5 d-flex ">
          <img
            className="pe-5"
            src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
            alt=""
          />

<Link  to = "/login"  className="text-decoration-none  text-dark fw-bold  "    style={{display:hide}}    >  

          <span className="pe-5"  >Login</span>
</Link>

<Link  to = "/signup"  className="text-decoration-none  text-dark fw-bold"    style={{display:hide}}    > 

          <span className="pe-5-1">Signup</span>


          </Link>
          <Link   className="text-decoration-none  text-dark fw-bold pt-3 pe-3"        > 

          <span>{props.user}</span>




          </Link>





          <Link   className="text-decoration-none  text-dark fw-bold  "    style={{display:hide2}} onClick={ Remove}  > 



          <i class="bi bi-box-arrow-right fs-1  fw-bold" ></i>


</Link>




        </span>
      </nav>
    </>
  );
};

export default Navbar;
