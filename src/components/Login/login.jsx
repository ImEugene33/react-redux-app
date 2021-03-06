import React from "react";
import { Field, reduxForm } from "redux-form";
import { CustomCheckbox, TextArea } from "../Common/FormsControl/FormsControl";
import styles from "../Common/FormsControl/FormsControl.module.css";
import { Alert, Button } from "@mui/material";
import { required } from "../../utils/validator/validator";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}

        <div>
          <Field
            placeholder={"Email"}
            name={"email"}
            component={TextArea}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            component={TextArea}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name={"remember"}
            component={CustomCheckbox}
            label={"Remember me"}
            type={"checkbox"}
          />
        </div>

        <div>
          <Button className={styles.button} type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>

      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login })(Login);
