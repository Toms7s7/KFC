import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./compoent/navbar";
import { Link } from "react-router-dom";
import Cart from "./compoent/cart";


const Menu = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);

// let urls = [
// 'http://localhost:7000/chizza',
// 'http://localhost:7000/chicken-bucket',
// 'http://localhost:7000/new-launch',
// 'http://localhost:7000/biriyani-bucket',
// 'http://localhost:7000/box-meals',
// 'http://localhost:7000/burgers',
// 'http://localhost:7000/snacks',
// 'http://localhost:7000/beverages'



// ];



// var ID = useRef(0) 

// const [selectedItems1, setSelectedItems1] = useState([]);

// const [selectedItems2, setSelectedItems2] = useState([]);

// const [selectedItems3, setSelectedItems3] = useState("");

// const [selectedItems4, setSelectedItems4] = useState("");



  const [data, setdata] = useState([]);

  const [Find, setFind] = useState(" ");

  console.log(props.selectedItems1)
  // console.log(props.selectedItems2)
  // console.log(props.selectedItems3)
  // console.log(props.selectedItems4)

  var AddToCart = (ADD)=>
  {

    

    // var NewData = {
    //   value: e.target.value,
    //   name: e.target.name ,
    //   id:e.target.id,
    //    title:e.target.title



    // }

    // console.log(e.target.value)
    // console.log(e.target.name)
    
    // console.log(e.target.id)
    props.setSelectedItems1([...props.selectedItems1, {...ADD } ] );



     setButtonClicked(prevState => ({
      ...prevState,
      [ADD.id]: true }));

    // props.setSelectedItems1([...props.selectedItems1, e.target.value ]);
    // props.setSelectedItems2([...props.selectedItems2, e.target.name ]);
    // props.setSelectedItems3([...props.selectedItems3, e.target.id]);


    // props.setSelectedItems4([...props.selectedItems4, e.target.title]);
    
// console.log(e.target.id)
//     // console.log(ID.current.id)
//        props.setCart([...props.cart,e.target.id])

// console.log(props.cart)

 }

  useEffect(() => {
  




    fetch('http://localhost:7000/kfc')
      .then((res) => res.json())
      .then((user) => {




        setdata(user);
        console.log(user)

        // var [data1,data2,data3,data4,data5,data6,data7,data8] = user

        //  console.log()




        //  console.log({data2})




      });
  }, []);

  var Search = (e) => {
    setFind(e.target.value.toLowerCase());
  };


  


  console.log({ data });



  // var filter1 = data.filter((item) => {
  //     return Find.toLowerCase() === ""
  //       ? item
  //       : item.name.toLowerCase().includes(Find);
  //   })


  //   console.log(filter1)





  return (
    <>
       <Navbar  selectedItems1 ={props.selectedItems1}   setSelectedItems1 ={ props.setSelectedItems1}   user={ props.user}  setuser={ props.setuser}  /> 

      <div className="row">
        <div className="col-2  ">
          <div id="list-example" class="list-group sticky-top ">
            <img
              className="w-75"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />
          
            <h1 className="pb-5 ps-5" style={{ fontFamily: "cursive" , paddingTop:"20px" }} >
              KFC Menu
            </h1>
            


           
            <a
              class="list-group-item list-group-item-action  fw-bold ps-5  fs-5  border-0" 
              href="#list-item-1" style={{fontFamily:"cursive",paddingTop:"60px"}}>
              chizza
            </a>
          
            <hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5  border-0"
              href="#list-item-2" style={{fontFamily:"cursive"}}>
              chicken-bucket
            </a>
            <hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-3" style={{fontFamily:"cursive"}}>
              new-launch
            </a>
            <hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-4" style={{fontFamily:"cursive"}}>
              biriyani-bucket
            </a>
            <hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-5" style={{fontFamily:"cursive"}}>
              box-meals
            </a>
<hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-6" style={{fontFamily:"cursive"}}>
            snacks
            </a>
<hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-7" style={{fontFamily:"cursive"}}>
              burnger
            </a>
<hr />
            <a
              class="list-group-item list-group-item-action fw-bold ps-5 fs-5 border-0"
              href="#list-item-8" style={{fontFamily:"cursive"}}>
              beverages
            </a>

  <hr />
          </div>
        </div>

        <div className="col-10">
          

<div className="border border-1 border-dark rounded-pill w-50 mt-5  "style={{marginLeft:"50px"}}> 

<span><i class="bi bi-search ps-2"></i></span><input type="search"className=" border-0 w-75   d-inline  p-2 " style={{outline:"none" ,boxSizing:"border-box"}} onChange={Search} placeholder="search our menu"/  >  

           
          
           </div>


          
          {/* <p>{Find}</p> */}
          <h1 className="p-5" style={{fontFamily:"cursive"}}>ALL ITEMS -</h1>




          <div className="row" style={{width:"1620px"}} >
           
            { data.filter((item) => {
                return Find.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(Find);
              }).map((item) => {
                return(
                
                <>


                
                
                <div key={item.id} className="card col-3 m-5  rounded  border border-5 shadow-lg   " id={item.catid} >
        
                     
        {/* <h1 className="bg-dark text-light text-center " style={{fontFamily:"cursive"}}>{item.header}    </h1> */}
                 
        
        
                    <img
                        src={item.Image}
                        className="card-img-top rounded w-100 p-4 "
                        alt="..."
                      />
                      <div className="card-body  ">
                        <h5 className="card-title fw-bold" style={{fontFamily:"cursive"}}>{item.title}</h5>
                        <p className="card-text ">{item.description}</p>
          
                          <p> {item.veg}</p>
                        <p className="fw-bold "><u>${item.price}</u></p>
                        <button className="btn btn-danger"   onClick={ ()=>   AddToCart(item)  }  disabled={buttonClicked[item.id]} >
                       
                          ADD to cart
                        </button>
                      </div>

                      
                    </div>
                    </>
              
                )
                
                 {
                  console.log(item.name);
                }


               
                
              })}  


             
   










 






          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
