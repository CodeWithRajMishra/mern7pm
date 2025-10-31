import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
    const [mydata, setMydata] = useState([]);
    const loadData = async () => {
        let api = "http://localhost:8000/employees/display";
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
                    <td> {key.empno} </td>
                    <td> {key.name} </td>
                    <td> {key.designation} </td>
                    <td> {key.salary} </td>
                </tr>

            </>
        )
    })
    return (
        <>
            <h1> Display Data</h1>
            <hr />
            <table>
                <tr>
                    <th>Empno</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default Display;