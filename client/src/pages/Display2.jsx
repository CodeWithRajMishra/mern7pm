import axios from "axios";
import { useState, useEffect } from "react";


const Display2=()=>{
    const [mydata, setMydata] = useState([]);


    const loadData = async()=>{
         let api="http://localhost:8000/employees/display2";
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])


    const ans= mydata.map((key)=>{
         return(
            <>
              <tr>
                <td> {key.booktitle} </td>
                <td>{key.price}</td>
                  <td>{key.aid.name}</td>
                    <td>{key.aid.address}</td>
              </tr>
            
            </>
         )
    })

    return(
        <>
         <h1> Diplay By Books</h1>
         <table>
            <tr>
                <th>Book Title</th>
                <th> Price </th>
                <th> Author name</th>
                <th> Address</th>
            </tr>
            {ans}
         </table>
        </>
    )
}

export default Display2;