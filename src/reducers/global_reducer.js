import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    GET_STATES_START,
    GET_STATES_SUCCESS,
    GET_STATES_ERROR
} from "../actions";

const initialState = {
    userId: null,
    isLoading: false,
    error: "",
    hasToken: false,
    cities: [],
    states: [],
    user: {}
};

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state, isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                    hasToken: true,
                    user: action.payload,
                    err: ''
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                    hasToken: false,
                    error: action.payload
            };
        case REGISTER_START:
            return {
                ...state, isLoading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                    hasToken: true,
                    user: action.payload,
                    err: ''
            };
        case REGISTER_ERROR:
            return {
                ...state,
                isLoading: false,
                    hasToken: false,
                    error: action.payload
            };
        case GET_CITIES_START:
            return {
                ...state, isLoading: true
            };
        case GET_CITIES_SUCCESS:
            return {
                ...state, isLoading: false, cities: action.payload, err: ''
            };
        case GET_CITIES_ERROR:
            return {
                ...state,
                isLoading: false,
                    error: action.payload
            };
        case GET_STATES_START:
            return {
                ...state, isLoading: true
            };
        case GET_STATES_SUCCESS:
            return {
                ...state, isLoading: false, states: action.payload, err: ''
            };
        case GET_STATES_ERROR:
            return {
                ...state,
                isLoading: false,
                    error: action.payload
            };
        default:
            return state;
    }
};