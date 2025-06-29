import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[], 
    nextId: 1
}

const todoSlice = createSlice({
    initialState, 
    name: "todo",
    // reducers -> addtodo, removesingletodo
    reducers:{
        addtodo:(state, action) =>{
            const newTodo = {
                id: state.nextId,
                text: action.payload
            }
            state.todos.push(newTodo)
            state.nextId++
        }, 
        removeSingleTodo:(state, action) =>{
            // id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }

})

export const {addtodo, removeSingleTodo} = todoSlice.actions
export default todoSlice.reducer