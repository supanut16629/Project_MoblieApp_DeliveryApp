import { combineReducers } from 'redux'
import todosReducer from './todosSlice'
import restaurantReducer from './restaurantSlice'
import menuReducer from './menuSlice'
import orderReduer from './orderSlice'
const rootReducer = combineReducers({
    todos:todosReducer,
    restaurant:restaurantReducer,
    menu:menuReducer,
    order: orderReduer,
})

export default rootReducer