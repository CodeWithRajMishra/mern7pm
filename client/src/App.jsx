import { useState } from "react";
import { addTask, delTask } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteSweep } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const App=()=>{
  const [val, setVal]= useState("");
  const dispatch = useDispatch();
  const myTask= useSelector(state=>state.todo.task);
  console.log(myTask);
  const ans= myTask.map((key, index)=>{
     return(
      <>
         <tr>
          <td>{index+1}</td>
          <td>{key.work}</td>
          <td>
            <MdDeleteSweep onClick={()=>{dispatch(delTask({id:key.id}))}} />
          </td>
          <td>
            <FaCircleCheck />
          </td>
          <td>
            <ImCross />
          </td>
          <td>
            <button>Edit</button>
          </td>
         </tr>
      </>
     )
  })
  return(
    <>
      <h1> To Do App </h1>
      <hr />
      Enter Task : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
      <button onClick={()=>{dispatch(addTask({id: Date.now(), work:val}))}}>Add</button>
      <hr />
      <table>
        <tr>
          <th>SNo</th>
          <th> You Assigned Task</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {ans}
      </table>

    </>
  )
}
export default App;