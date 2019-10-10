import {
    axiosWithAuth
} from '../../utils/AxiosWithAuth'


export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR = "GET_USER_DATA_ERROR";

export const getUser = (userId) => {
    return dispatch => {
        dispatch({
            type: GET_USER_DATA_START
        })
        axiosWithAuth()
            .get(`https://farm-fresh-bw.herokuapp.com/api/consumers/${userId}`)
            .then(res => {
                dispatch({
                    type: GET_USER_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => dispatch({
                type: GET_USER_DATA_ERROR,
                payload: err.response
            }))
    }
}

export const GET_LOCAL_FARMS_START = "GET_LOCAL_FARMS_START";
export const GET_LOCAL_FARMS_SUCCESS = "GET_LOCAL_FARMS_SUCCESS";
export const GET_LOCAL_FARMS_ERROR = "GET_LOCAL_FARMS_ERROR";

export const getFarms = (cityId, stateId) => {
    return dispatch => {
        dispatch({
            type: GET_LOCAL_FARMS_START
        })
        axiosWithAuth()
            .get(`https://farm-fresh-bw.herokuapp.com/api/consumers/farms/${cityId}/${stateId}`)
            .then(res => {
                dispatch({
                    type: GET_LOCAL_FARMS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => dispatch({
                type: GET_LOCAL_FARMS_ERROR,
                payload: err.response
            }))
    }
}

export const GET_CATEGORIES_START = "GET_CATEGORIES_START";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

export const getCategories = () => {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES_START
        })
        axiosWithAuth()
            .get(`https://farm-fresh-bw.herokuapp.com/api/consumers/shop/categories`)
            .then(res => {
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => dispatch({
                type: GET_CATEGORIES_ERROR,
                payload: err.response
            }))
    }
}

export const GET_LOCAL_ITEMS_START = "GET_LOCAL_ITEMS_START";
export const GET_LOCAL_ITEMS_SUCCESS = "GET_LOCAL_ITEMS_SUCCESS";
export const GET_LOCAL_ITEMS_ERROR = "GET_LOCAL_ITEMS_ERROR";

export const getLocalItems = (cityId) => {
    return dispatch => {
        dispatch({
            type: GET_LOCAL_ITEMS_START
        })
        axiosWithAuth()
            .get(`https://farm-fresh-bw.herokuapp.com/api/consumers/shop/${cityId}`)
            .then(res => {
                console.log(res.data.items)
                dispatch({
                    type: GET_LOCAL_ITEMS_SUCCESS,
                    payload: res.data.items
                })
            })
            .catch(err => dispatch({
                type: GET_LOCAL_ITEMS_ERROR,
                payload: err.response
            }))
    }
}