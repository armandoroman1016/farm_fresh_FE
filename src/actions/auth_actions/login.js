import axios from 'axios'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginAttempt = (endpoint, values) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post(`https://farm-fresh-bw.herokuapp.com/api/auth${endpoint}`, values)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => dispatch({ type: LOGIN_ERROR, payload: err.response }));
  };
};
