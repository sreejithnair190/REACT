import React from 'react'
import { signInWithGooglePopup, createUserAccount } from'../../../utils/firebase/firebase';

const SignIn = () => {
  const logUser = async () => {
    try {
        const {user} = await signInWithGooglePopup();
        createUserAccount(user);
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div>
        <button onClick={logUser}>SIGN IN WITH GOOGLE</button>
    </div>
  )
}

export default SignIn