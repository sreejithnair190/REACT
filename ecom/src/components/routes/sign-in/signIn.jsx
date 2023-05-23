import React from 'react'
import { signInWithGooglePopup } from'../../../utils/firebase/firebase';

const SignIn = () => {
  const logUser = async () => {
    try {
        const response = await signInWithGooglePopup();
        console.log(response);
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