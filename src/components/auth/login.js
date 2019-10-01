import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form as SemanticForm } from "semantic-ui-react";
import axios from "axios";

const Login = props => {
  return (
    <div className="form_container">
    <Form>
      <SemanticForm>
          <h2> Login </h2>
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
           <Button type="submit">Go</Button>
          </SemanticForm>
          </Form>
    </div>
  );
};

const ConsumerLogin = withFormik({
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
  handleSubmit(values) {

    axios.post('https://farm-fresh-bw.herokuapp.com/api/auth/farmer/login', values)
    .then( res => {
      localStorage.setItem('token', res.data.token)
      console.log(res)})
    .catch( err => console.log(err))
  }
})(Login);

export default ConsumerLogin;
