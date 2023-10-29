import React from "react";
import Button from "./Button";
import CustomText from "./CustomText";
import { useNavigate } from "react-router-dom";



function Login(){
  const gonavigateTo=useNavigate();

  function sendData(){
    gonavigateTo("/products")
  }
    return(
      <div>
      <center>
       Username: <input type="text" name="email" placeholder="email"/><br></br>
       Password: <input type="password" name="password" placeholder="password"/>
       
      
      <CustomText placetxt="new2"></CustomText>
      <button onClick={gonavigateTo} >Login</button>
      </center>
      </div>
    )
}

export default Login;