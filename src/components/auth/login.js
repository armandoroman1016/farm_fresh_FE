import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Form as SemanticForm, Loader } from "semantic-ui-react";
import { loginAttempt, handleSuccess, handleError } from '../../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import axios from 'axios'

const Login = props => {

  const { location } = props
  
  return (
    <div className="form_container">
      <Form location={location}>
        <SemanticForm>
          <h2> {location.pathname.split('/').includes('farmer') ? "Farmer Login" : "Shop Login"} </h2>
          <SemanticForm.Field>
            <Field placeholder="Username" name="username" type="text" />
          </SemanticForm.Field>
          <SemanticForm.Field>
            <Field
              placeholder="Password . . ."
              name="password"
              type="password"
            />
          </SemanticForm.Field>
          <Button type="submit">{props.isLoading ? <Loader active inline='centered' size='mini' /> : "Go"}</Button>
        </SemanticForm>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is a required field."),
    password: Yup.string().required("Password is required field.")
  }),
  handleSubmit(values, props) {
    //! waiting for login attempt to resolve before trying to push onto the history object.
      const loginEndpoint = props.props.location.pathname;
      const userType = loginEndpoint.split('/')[1]
      props.props.loginAttempt()
      axios
      .post(`https://farm-fresh-bw.herokuapp.com/api/auth${loginEndpoint}`, values)
      .then(res => {
        props.props.handleSuccess(res.data.user)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("ff_berries", res.data.user.id);
        props.props.history.push(`/${userType}/dashboard/`)
      })
      .catch(err => props.props.handleError(err.response));

  }})(Login);

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    hasToken: state.hasToken
  }
}

export default connect(mapStateToProps, { loginAttempt, handleSuccess, handleError })(FormikLogin)