import axios from 'axios'

export const GET_CITIES_START = "GET_CITIES_START";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_ERROR = "GET_CITIES_ERROR";

export const getCities = () => {
  return dispatch => {
    dispatch({ type: GET_CITIES_START });
    axios
      .get(`https://farm-fresh-bw.herokuapp.com/api/locations/cities`)
      .then(res => {
        dispatch({ type: GET_CITIES_SUCCESS, payload: res.data.cities});
      })
      .catch(err => dispatch({ type: GET_CITIES_ERROR, payload: err.response }));
  };
};

export const GET_STATES_START = "GET_STATES_START";
export const GET_STATES_SUCCESS = "GET_STATES_SUCCESS";
export const GET_STATES_ERROR = "GET_STATES_ERROR";

export const getStates = () => {
  return dispatch => {
    dispatch({ type: GET_STATES_START });
    axios
      .get(`https://farm-fresh-bw.herokuapp.com/api/locations/states`)
      .then(res => {
        dispatch({ type: GET_STATES_SUCCESS, payload: res.data.states});
      })
      .catch(err => dispatch({ type: GET_STATES_ERROR, payload: err.response }));
  };
};