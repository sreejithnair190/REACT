import { useState, useContext } from "react";
import {
  createAuthUser,
  createUserAccount,
} from "../../../utils/firebase/firebase";
import { UserContext } from "../../../context/user";
import FormInput from "./../../form/formInput";
import "../../../assets/scss/sign-up.scss";
import Button from "./../../button/button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUser(email, password);

      await createUserAccount(user, { displayName });
      setCurrentUser(user);
      alert("User created successfully");
      resetFields();
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? alert("Email already in use")
        : console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button children="Sign up" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
