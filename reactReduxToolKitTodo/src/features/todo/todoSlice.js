import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            state.todos.map((todo) => todo.id === id ? { ...todo, text: newText } : text);
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;