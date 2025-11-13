import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
const Home=()=>{

 const navigate = useNavigate();

   const validateAuth=async()=>{
  
     const token = localStorage.getItem("token");
     if (token){

        let api="http://localhost:8000/employees/userauth";
        const response = await axios.post(api, null, {headers:{"auth-token":token}});
        console.log(response.data);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);   
        navigate("/dashboard");
     }


   }

   useEffect(()=>{
    validateAuth();
   }, [])
 

    return(
        <>
          <h1> Welcome To  JWT Login</h1>
        

        </>
    )
}

export default Home;