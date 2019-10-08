import { combineReducers } from 'redux'
import { globalReducer } from './global_reducer'
import { shoppingReducer } from './consumer/shopping.js'

export default combineReducers({
    globalReducer, shoppingReducer
})

