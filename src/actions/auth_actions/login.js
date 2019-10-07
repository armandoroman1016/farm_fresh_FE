export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginAttempt = () => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
  };
};

export const handleSuccess = ( userInfo ) => {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
  }
}

export const handleError = ( err ) => {
  return dispatch => {
    dispatch({ type: LOGIN_ERROR, payload: err })
  }
}