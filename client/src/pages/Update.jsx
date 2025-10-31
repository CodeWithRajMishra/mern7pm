import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update=()=>{
const [mydata, setMydata] = useState([]);
const navigate = useNavigate();

const loadData=async()=>{
      let api = "http://localhost:8000/employees/updatedisplay";
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
}

useEffect(()=>{
  loadData();
}, [])

const myDel=async(id)=>{
   let api = `http://localhost:8000/employees/updatedelete?id=${id}`;
  const response = await axios.get(api);
  alert(response.data);
  loadData();
}

const myEdit=async(id)=>{
  navigate(`/myedit/${id}`)
}


const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
        <td> {key.empno} </td>
         <td> {key.name} </td>
          <td> {key.designation} </td>
           <td> {key.salary} </td>
           <td> 
            <a href="#" onClick={()=>{myEdit(key._id)}}>Edit</a> / 
            
           <a href="#" onClick={()=>{myDel(key._id)}}>Delete</a> 
            
            </td>
      </tr>
    
    </>
  )

});

return(
        <>
          <h1> Update Data</h1>
          <hr/>

          <table width="600" border="1">
            <tr>
              <th>Empno</th>
                <th>Name</th>
                  <th>Designation</th>
                    <th>Salary</th>
                    <th> </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Update;