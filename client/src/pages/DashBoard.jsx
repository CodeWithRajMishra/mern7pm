import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashBoard=()=>{
const navigate = useNavigate();

 useEffect(()=>{

     if (!localStorage.getItem("username"))
     {
        navigate("/home");
     }

 }, [])

const logout=()=>{
    localStorage.clear();
   navigate("/home");
  }

    return(
        <>
          <h1> Welcom User</h1>
          <hr />
          <h3>
             Welcome {localStorage.getItem("username")} Email : {localStorage.getItem("email")}
             <a href="#" onClick={logout}>Logout</a>
          </h3>
         
        </>
    )
}

export default DashBoard;