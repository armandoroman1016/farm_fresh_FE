import {
  GET_LOCAL_FARMS_START,
  GET_LOCAL_FARMS_SUCCESS,
  GET_LOCAL_FARMS_ERROR,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR
} from "../../actions/index";

const initialState = {
  farms: [],
  shoppingCategories: [],
  shoppingItems: [],
  shoppingCart: [],
  isLoading: false,
  error: "",
  user: {}
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_START:
      return {
          ...state,
          isLoading:true
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        user: action.payload,
        error: ""
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isLoading:false,
        error: action.payload
      };
    case GET_LOCAL_FARMS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_LOCAL_FARMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        farms: action.payload,
        error: ""
      };
    case GET_LOCAL_FARMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
