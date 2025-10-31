import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MyEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});

   const loadData=async()=>{
     let api = `http://localhost:8000/employees/editdisplay?id=${id}`;
     const response = await axios.get(api);
     console.log(response.data);
     setMydata(response.data);
   }

useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setMydata(values=>({...values, [name]:value}));
   console.log(mydata);
}


const handleSubmit=async()=>{
    let api = `http://localhost:8000/employees/editsave`;
    const response = await axios.put(api, mydata);
    console.log(response.data);
}
     return(
        <>
          <h1> My Edit {id}</h1>
          Edit Empno <input type="text" value={mydata.empno} name="empno" onChange={handleInput} />
          <br />
           Edit Name <input type="text"  value={mydata.name} name="name" onChange={handleInput} />
          <br />
           Edit Designation <input type="text"  value={mydata.designation} name="designation" onChange={handleInput} />
          <br />
           Edit Salary <input type="text"  value={mydata.salary} name="salary" onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}>Edit Save!</button>
        </>
     )
}

export default MyEdit;