import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers:{
        addTask:(state, action) => {
            state.push(action.payload);
        },
        updateTask:(state, action) => {
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
          },          
        setTasksFromlocalStorage:(state, action) => {
            return action.payload;
        }
    }
});

export const { addTask, updateTask, deleteTask, setTasksFromlocalStorage } = taskSlice.actions;
export default taskSlice.reducer;