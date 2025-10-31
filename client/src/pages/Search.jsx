import axios from "axios";
import { useState } from "react";

const Search=()=>{
    const [eno, setEno]= useState("");
    const [mydata, setMydata] = useState({});


    const handleSubmit=async()=>{
          let api = "http://localhost:8000/employees/search";
          const response = await axios.post(api, {empno:eno});
          console.log(response.data);
          setMydata(response.data);

    }
    return(
        <>
        <h1> Search Data</h1>
        Enter Employee No : <input type="text" value={eno} onChange={(e)=>{setEno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>
        <hr />
          <h1> Empno  : {mydata.empno}</h1>
           <h1> Name  : {mydata.name}</h1>
             <h1> Designation  : {mydata.designation}</h1>
              <h1> Salary  : {mydata.salary}</h1>
        </>
    )
}

export default Search;