import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form as SemanticForm } from "semantic-ui-react";
import axios from "axios";

const Register = props => {
  return (
    <div className="form_container">
    <Form>
      <SemanticForm>
          <h2> Register </h2>
          <SemanticForm.Field>
            <Field placeholder="Username" name="username" type="text" />
          </SemanticForm.Field>
          <SemanticForm.Field>
            <Field placeholder="Email" name="email" type="email" />
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

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, email}) {
    return {
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is a required field."),
    email: Yup.string().required('Enter a valid email.'),
    password: Yup.string().required("Password is required field.")
  }),
  handleSubmit(values) {
    axios.post('https://farm-fresh-bw.herokuapp.com/api/auth/farmer/register', values)
    .then( res => {
        localStorage.setItem('token', res.data.token)
    })
    .catch( err => console.log(err))
  }
})(Register);

export default FormikRegister;