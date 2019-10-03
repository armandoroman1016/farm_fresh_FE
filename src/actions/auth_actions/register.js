import axios from 'axios'

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerAttempt = (endpoint, values) => {
  return dispatch => {
    dispatch({ type: REGISTER_START });
    axios
      .post(`https://farm-fresh-bw.herokuapp.com/api/auth${endpoint}`, values)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => dispatch({ type: REGISTER_ERROR, payload: err.response }));
  };
};
