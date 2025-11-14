import { useState, useEffect } from "react";
import axios from "axios";

const Login=()=>{
  const [mydata, setMydata] = useState([]);
  
  const loadData= async()=>{
       let api="http://localhost:8000/employees/display";
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
  }


  useEffect(()=>{
    loadData();
  }, []);

const ans=mydata.map((key)=>{
  return(
    <>
     <tr>
      <td> {key.fname}</td>
       <td> {key.lname}</td>
        <td> {key.userid.username}</td>
         <td> {key.userid.email}</td>
     </tr>
    </>
  )
})


    return(
        <>
          <h1> User Display </h1>
          <table>
            <tr>
              <td> Frist name</td>
              
              <td> Last name</td>
                <td> User name</td>
                  <td> Email</td>

            </tr>
            {ans}
          </table>
         
        </>
     )
}
export default Login;