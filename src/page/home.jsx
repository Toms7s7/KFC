import Navbar from "./compoent/navbar";
import { Link } from "react-router-dom";



const Home = (props) => {
  return (
    <>
     <Navbar   selectedItems1 ={props.selectedItems1}   setSelectedItems1 ={ props.setSelectedItems1}   user={ props.user}      setuser={ props.setuser}           />
      {/* ----------------------------------------------------------------------------------------------------------------------------------NAV------------------------------------------------------------------------------------------------------------ */}

      <div
        id="carouselExampleControls"
        className="carousel slide  pb-5"
        data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/5O6t7HsN1Szd1iiHWzRFSb/78e2e8b9d0d95e6f6a64cbb7d690661a/Chizza_Banner_1440x396px.jpg?w=958&fit=fill&fm=webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/5gf6cz2vMpCLgQ4M4XaUaj/8a10d03ec85203e7439e113d336f949d/Zinger_pro_1440x396px.jpg?w=958&fit=fill&fm=webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===============================================================================caroual========================================================================================================= */}

      <div className="row pt-5 pb-4">
        <div className="col-3 offset-1">
          <h1 className="fw-bold" style={{ fontFamily: "cursive" }}>
            browse categories
          </h1>
        </div>

        <div className="col-6 pt-3">
          <hr style={{backgroundColor:"black", padding:"2px" }} />          
        </div>
      </div>







      <div className="row gap-5 pt-5" >

      <a className=" col-2 text-decoration-none text-dark" href="/menu/#list-item-1" >
        
        <div className=" offset-1 " style={{cursor:"pointer"}}>

        <img style={{width:"336px"}} src="https://th-i.thgim.com/public/incoming/rfytn7/article66626318.ece/alternates/FREE_1200/Image%203.jpg" alt="" />

        <section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>


       
        CHIZZA
       





        </section>





        </div>
        </a>



        <a className=" col-2 offset-1  text-decoration-none text-dark" href="/menu/#list-item-8" >

        <div className="" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/CAT92.jpg?ver=39.72" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>




beverages






</section>





</div>

</a>


<a className="col-2 offset-1  text-decoration-none text-dark" href="/menu/#list-item-6" >

<div className="" style={{cursor:"pointer"}}>

<img style={{width:"336px", height:"250px"}} src="https://i.pinimg.com/originals/ca/b3/d4/cab3d438091a0ed6b1da787272be5a78.png" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>


snack






</section>





</div>

</a>

<a className=" col-2 offset-1 text-decoration-none text-dark" href="/menu/#list-item-2" >
<div className="" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=39.71" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>



CHICKEN BUCKETS






</section>





</div>


</a>






<a className="col-2 offset-1 text-decoration-none text-dark" href="/menu/#list-item-4" >


<div className=" offset-1" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=39.71" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>



BIRYANI BUCKETS






</section>





</div>

</a>






<a className=" col-2 offset-1 text-decoration-none text-dark" href="/menu/#list-item-5" >

<div className="" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=39.71" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>


BOX MEALS






</section>





</div>

</a>















<a className=" col-2 offset-1 text-decoration-none text-dark" href="/menu/#list-item-8" >

<div className="" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=39.71" alt="" />

<section className="text-center pt-4 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>



BURGERS






</section>





</div>

</a>









<div className="col-2 offset-4 bg-light" style={{cursor:"pointer"}}>

<img style={{width:"336px"}} src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="" />

<section className="text-center pt-5 fw-bold pb-4 bg-light"  style={{ fontFamily: "cursive" }}>


<Link  className="text-decoration-none text-dark" to="/menu" >
View All Menu 
</Link>

<img className="ps-2"  style={{width:"50px"}} src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg" alt="" />



</section>





</div>






{/* ====================================================================categories=================================================================================================================== */}





























































      </div>
    </>
  );
};

export default Home;
