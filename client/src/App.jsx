import { useState } from "react";
import { addTask, delTask, taskComplete, taskIncomplete, taskUpdate } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteSweep } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const App=()=>{
  const [val, setVal]= useState("");
  const [btnStatus, setBtnstatus]= useState(true);
  const [taskId, setTaskId] = useState("");
  const dispatch = useDispatch();
  const myTask= useSelector(state=>state.todo.task);
  console.log(myTask);


  const taskEdit=(tsk, id)=>{
    setVal(tsk)
    setBtnstatus(false);
    setTaskId(id);
  }

  const myUpdate=()=>{
    dispatch(taskUpdate({id:taskId, work:val}));
     setBtnstatus(true);
     setVal("");
  }



  const ans= myTask.map((key, index)=>{
     return(
      <>
         <tr>
          <td>{index+1}</td>
          <td>
            
            {key.status=="complete"?(<>
              <span style={{color:"red",textDecoration: "line-through" }}>{key.work}</span>
            </>):(<>
                    {key.work}
            </>)}
          
            
            
            </td>
          <td>
            <MdDeleteSweep onClick={()=>{dispatch(delTask({id:key.id}))}} />
          </td>
          <td>
            <FaCircleCheck onClick={()=>{dispatch(taskComplete({id:key.id}))}} />
          </td>
          <td onClick={()=>{dispatch(taskIncomplete({id:key.id}))}}>
            <ImCross />
          </td>
          <td>
            <button onClick={()=>{taskEdit(key.work, key.id)}}>Edit</button>
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
    {btnStatus?(<>
    
     <button onClick={()=>{dispatch(addTask({id: Date.now(), work:val, status:"incomplete"}))}}>Add</button>
    </>):(<>
     
      <button onClick={myUpdate}>update</button>
    </>)}
    
     
    
     
    
    
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