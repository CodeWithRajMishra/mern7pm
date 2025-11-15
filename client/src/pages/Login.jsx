import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login=()=>{
  const [mydata, setMydata] = useState([]);
   const [show, setShow] = useState(false);
   const [aid, setAid] = useState("");
   const [booktitle, setBookTitle] = useState("");
   const [price, setPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) =>{
setShow(true);
setAid(id)
  } 
  
  const loadData= async()=>{
       let api="http://localhost:8000/employees/display";
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
  }

  const saveBook=async()=>{
      let api="http://localhost:8000/employees/savebook";
      const response= await axios.post(api,{aid, booktitle, price} );
      console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, []);

const ans=mydata.map((key)=>{
  return(
    <>
     <tr>
      <td> {key.name}</td>
       <td> {key.address}</td>
        <td> 
           {
            key.booksid.map((key1)=>{
              return(
                <>
                    <p> Title :  {key1.booktitle} Price :{key1.price}</p>
                </>
              )
            })
           }
          </td>
          <td>
            <button onClick={()=>{handleShow(key._id)}}>Add more Book</button>
          </td>
     </tr>
    </>
  )
})


    return(
        <>
          <h1> User Display </h1>
          <table>
            <tr>
              <td>  name</td>
              
              <td> Address</td>
                <td> Books Detail</td>
                
               <td></td>
            </tr>
            {ans}
          </table>
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add more Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Enter Book Title : <input type="text" value={booktitle} onChange={(e)=>{setBookTitle(e.target.value)}} />
           <br />
           Enter Price : <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
           <br />
           <button onClick={saveBook}>Add!</button> 

        </Modal.Body>
       
      </Modal>
         
        </>
     )
}
export default Login;