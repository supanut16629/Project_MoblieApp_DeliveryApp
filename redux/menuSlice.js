import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
const initialState = []

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenu(state, action) {
            // console.log(action.payload.id)
            // console.log(action.payload.name)
            // console.log(action.payload.description)

            state.push({
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                image: action.payload.image,
                imageRes: action.payload.imageRes,
                nameRes: action.payload.nameRes,
                detail: action.payload.detail,
                price: action.payload.price,
            }); //proxy state
        },
        deleteMenu(state,action) {
            return state.filter((item) => item.id === "000");
        },
    }
})

const { actions, reducer } = menuSlice
export const { addMenu , deleteMenu} = actions
export default reducer