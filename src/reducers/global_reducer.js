import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions'

const initialState = {
    userId: null,
    isLoading:false,
    error: '',
    hasToken: false,
    cities: [],
    states: [],
    user: {}
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {...state, isLoading:true};
        case LOGIN_SUCCESS:
            return {...state, isLoading:false, hasToken:true, user: action.payload}
        case LOGIN_ERROR:
            return {...state, isLoading:false, hasToken:false, error: action.payload}
        default:
            return state;
    }
}