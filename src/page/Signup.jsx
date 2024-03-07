import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData,setFormData] =  useState([]);
    const [errorMessage,setErrorMessage] =  useState();
    const navigate = useNavigate();
    const handleChange = (e)=>{
        
           if(e.target.name == "password")
           setFormData({...formData,password:e.target.value})
           if(e.target.name == "email")
           setFormData({...formData,email:e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!( formData.email && formData.password))
        {
            setErrorMessage("all field are eMPTY")
        }else{
            fetch(`http://localhost:7000/users?email=${formData.email}`)
            .then(res=>res.json())
            .then(users => {
                if(users.length != 0)
                {
                    setErrorMessage("User already exist");
                }else{
                    fetch(`http://localhost:7000/users`,
                    {
                        method: "post",
                        headers:{ "Content-Type" : "application/json"},
                        body : JSON.stringify(formData)
                    })
                    .then(res=>{
                        if(res){
                            setErrorMessage(undefined)
                            navigate("/login")
                        }
                    })
                }
            })
        }
    }
    return ( <>
     

        
        <form  className="container d-flex flex-column justify-content-center  border border-2 border-dark  " style={{height:"600px" ,marginTop:"200px"}}>
<div className="container d-flex justify-content-center pb-5"style={{fontFamily:"cursive"}}><h1><u>SIGNUP</u></h1></div>


        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  name="email"  onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control " id="exampleInputPassword1" name="password"  onChange={handleChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" value="Signup"  className="btn btn-danger mt-5"  onClick={onSubmit}>Submit</button>
</form>
     </> );
}
 
export default Signup;