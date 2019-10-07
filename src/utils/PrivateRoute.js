import React from 'react';

import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
  //? CHECKING USER TYPE IN PATH NAME TO REDIRECT TO EITHER USER TYPE
  const userType = rest.path.split('/')[1] 

  return (
    <>
      <Route {...rest} render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />
        }
        return <Redirect to={`/${userType}/login`}/>;
      }}
      />
    </>
  )
}

export default PrivateRoute;