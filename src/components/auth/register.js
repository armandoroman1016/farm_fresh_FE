import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Form as SemanticForm } from "semantic-ui-react";
import { connect } from "react-redux";
import { getCities, getStates, registerAttempt } from "../../actions";

const Register = props => {
  const { location } = props;

  useEffect(() => {
    if (location.pathname === "/shop/register") {
      props.getCities();
      props.getStates();
    }
  }, []);

  return (
    <div className="form_container">
      <SemanticForm>
        <Form location={location}>
          <h2>
            {location.pathname === "/farmer/register"
              ? "Farmer Register"
              : "Shop Register"}
          </h2>
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
          {location.pathname === "/shop/register" ? (
            <div>
              <Field placeholder="City . . ." name="city" component="select">
                {props.cities.map(city => {
                  return (
                    <option value={`${city.id}`}> {`${city.name}`} </option>
                  );
                })}
              </Field>
              <Field placeholder="State . . ." name="state" component="select">
                {props.states.map(state => {
                  return (
                    <option value={`${state.id}`}>{`${state.name}`}</option>
                  );
                })}
              </Field>
            </div>
          ) : null}
          <Button type="submit"> Go </Button>
        </Form>
      </SemanticForm>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is a required field."),
    email: Yup.string().required("Enter a valid email."),
    password: Yup.string().required("Password is required field."),
  }),
  handleSubmit(values, props) {
    const registerEndpoint = props.props.location.pathname;
    let valsToSubmit = values;
    if (registerEndpoint === "/shop/register") {
      valsToSubmit = {
        username: valsToSubmit.username,
        email: valsToSubmit.username,
        password: valsToSubmit.password,
        city_id: Number(valsToSubmit.city),
        state_id: Number(valsToSubmit.state)
      };
    }
    props.props.registerAttempt(registerEndpoint, valsToSubmit)
  }
})(Register);

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    cities: state.cities,
    states: state.states
  };
};

export default connect(
  mapStateToProps,
  {
    getCities,
    getStates,
    registerAttempt
  }
)(FormikRegister);
