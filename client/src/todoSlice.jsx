import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
     name:"todo",
     initialState:{
        task:[]
     },
     reducers:{
        addTask:(state, actions)=>{
           
            state.task.push(actions.payload);
        },

        delTask:(state, actions)=>{
            state.task= state.task.filter(item=>item.id!=actions.payload.id)
           
        },
        taskComplete:(state, actions)=>{
            for(var i=0; i<state.task.length; i++){
                 if (state.task[i].id==actions.payload.id)
                 {
                    state.task[i].status="complete";
                 }
            }
        },
        taskIncomplete:(state, actions)=>{
             for(var i=0; i<state.task.length; i++){
                 if (state.task[i].id==actions.payload.id)
                 {
                    state.task[i].status="incomplete";
                 }
            }
        },

        taskUpdate:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.work;
                }
            }
           
        }
     }
})

export const {addTask, delTask, taskComplete, taskIncomplete, taskUpdate}  = todoSlice.actions;
export default todoSlice.reducer;