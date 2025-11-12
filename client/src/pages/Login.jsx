import { useState } from "react";
import axios from "axios";
const Login=()=>{
    const [input, setInput] = useState({});
   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
   }
   const handleSubmit=async()=>{
      let api="http://localhost:8000/employees/login";
      const response = await axios.post(api, input);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      alert(response.data.msg);
   }
    return(
        <>
          <h1> Employee Login </h1>
            Enter Email : <input type="text" name="email" onChange={handleInput} />
          <br/>
            Enter Password : <input type="text" name="password" onChange={handleInput} />
          <br/>
          
          <button onClick={handleSubmit}>Save!!!</button>
        </>
     )
}
export default Login;