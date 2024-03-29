import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signInWithGooglePopup,
  createUserAccount,
  signInUserWithEmailPass,
} from "../../../utils/firebase/firebase";
import FormInput from "./../../form/formInput";
import  Button, { BUTTON_TYPE_CLASSES} from "./../../button/button";
import { setCurrentUser} from "./../../../store/user/userAction";
import "./../../../assets/scss/sign-in.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUserWithEmailPass(email, password);
      dispatch(setCurrentUser(user));
      resetFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Invalid Credentials");
      if (error.code === "auth/user-not-found") alert("No User found");
      console.log(error);
    }
  };

  const resetFields = () => setFormFields(defaultFormFields);

  const logUser = async () => {
    try {
      const user = await signInWithGooglePopup();
      createUserAccount(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button
            type="submit"
            children="Sign in"
          />
          <Button
            type="button"
            children="SIGN IN WITH GOOGLE"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logUser}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
