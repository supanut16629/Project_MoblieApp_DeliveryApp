import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
const initialState = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push({
                id: action.payload.id, firstname: action.payload.firstname, lastname: action.payload.lastname,
                phone: action.payload.phone, email: action.payload.email, password: action.payload.password,
                address: action.payload.address
            }); //proxy state
        },
        deleteTodo(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        updateTodo(state, action) {
            state.map((item) => {
                return item.firstname = action.payload.firstname,
                    item.lastname = action.payload.lastname,
                    item.phone = action.payload.phone,
                    item.address = action.payload.address

            });
        },
    }
})
const { actions, reducer } = todosSlice
export const { addTodo, deleteTodo,updateTodo} = actions
export default reducer