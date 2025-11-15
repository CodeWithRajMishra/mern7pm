import { useState } from "react";
import axios from "axios";
const Registration = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = async () => {
    let api = "http://localhost:8000/employees/registration";
    const response = await axios.post(api, input);
    console.log(response);
    alert(response.data);
  }
  return (
    <>
      <h1> Insert Book Data</h1>
      Enter Author Name : <input type="text" name="name" onChange={handleInput} />
      <br />
      Enter Author Address : <input type="text" name="address" onChange={handleInput} />
      <br />
      Enter Book Title : <input type="text" name="booktitle" onChange={handleInput} />
      <br />
       Enter Book Price : <input type="text" name="price" onChange={handleInput} />
      <br />

      <button onClick={handleSubmit}>Save!!!</button>
    </>
  )
}
export default Registration;