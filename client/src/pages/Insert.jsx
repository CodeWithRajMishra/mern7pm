import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] = useState({});
   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
   }
   const handleSubmit=async()=>{
      let api="http://localhost:8000/employees/save";
      const response = await axios.post(api, input);
      console.log(response);
      alert(response.data);
   }
    return(
        <>
          <h1> Insert Data</h1>
          Enter Empno : <input type="text" name="empno" onChange={handleInput} />
          <br/>
            Enter Name : <input type="text" name="name" onChange={handleInput} />
          <br/>
            Enter Designation : <input type="text" name="designation" onChange={handleInput} />
          <br/>
            Enter Salary : <input type="text" name="salary" onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}>Save!!!</button>
        </>
     )
}
export default Insert;