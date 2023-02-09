import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
const initialState = []

export let globalTotal = {
    total: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

        addOrder(state, action) {
            let duplicate = 0
            globalTotal.total += action.payload.price
            state.map((item) => {
                if (item.id === action.payload.id) {
                    duplicate = 1
                    console.log("plus++")
                    return (item.price += action.payload.price);
                }
            })
            if (duplicate == 0) {
                console.log(action.payload.id)
                console.log(action.payload.name)
                state.push({

                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                })
            }

        },
        delOrder(state, action) {

        },
        delAllOrder(state,action){
            return state.filter((item) => item.id === "000");
        },
    }
})

const { actions, reducer } = orderSlice
export const { addOrder, delOrder ,delAllOrder} = actions
export default reducer