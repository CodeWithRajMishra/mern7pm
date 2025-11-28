import { useState, useEffect } from "react";
import axios from "axios";
const Login = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = async () => {
    let api = "http://localhost:8000/display";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }
  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.rollno}</td>
          <td> {key.name}</td>
          <td> {key.address}</td>
          <td> <img src={key.defaultImage} width="300" height="200" />
            <br /> <br />
            {key.images.map((key1) => {
              return (<>
                <img src={key1} width="40" height="40" />
              </>)
            })}
          </td>
        </tr>
      </>
    )
  })
  return (
    <>
      <h1> User Display </h1>
      <table>
        <tr>
          <td> Name</td>
          <td> Address</td>
          <td> Books Detail</td>
          <td></td>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Login;