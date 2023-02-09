import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
const initialState = []

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        addRestaurant(state, action) {
            state.push({
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                detail: action.payload.detail,
            }); //proxy state
        },
    }
})

const { actions, reducer } = restaurantSlice
export const { addRestaurant } = actions
export default reducer