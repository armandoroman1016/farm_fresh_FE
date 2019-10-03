import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Form as SemanticForm, Loader } from "semantic-ui-react";
import { loginAttempt } from '../../actions'
import { connect } from 'react-redux'



const Login = props => {

  const {location} = props

  return (
    <div className="form_container">
    <Form location = {location}>
      <SemanticForm>
          <h2> {location.pathname === '/farmer/login/' ? "Farmer Login"  : "Shop Login"} </h2>
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
           <Button type="submit">{props.isLoading? <Loader active inline='centered' size = 'mini' />  : "Go"}</Button>
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
    const loginEndpoint = props.props.location.pathname
    props.props.loginAttempt(loginEndpoint, values)
  }
})(Login);

const mapStateToProps = state => {
  return {
     isLoading : state.isLoading
  }
}

export default connect(mapStateToProps, {loginAttempt})(FormikLogin)