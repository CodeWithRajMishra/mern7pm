import { useState } from "react";
import axios from "axios";
const Registration=()=>{
    const [input, setInput] = useState({});
   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
   }
   const handleSubmit=async()=>{
      let api="http://localhost:8000/employees/registration";
      const response = await axios.post(api, input);
      console.log(response);
      alert(response.data);
   }
    return(
        <>
          <h1> Insert Data</h1>
          Enter User name : <input type="text" name="username" onChange={handleInput} />
          <br/>
            Enter Email : <input type="text" name="email" onChange={handleInput} />
          <br/>
            Enter Password : <input type="text" name="password" onChange={handleInput} />
          <br/>
          
          <button onClick={handleSubmit}>Save!!!</button>
        </>
     )
}
export default Registration;