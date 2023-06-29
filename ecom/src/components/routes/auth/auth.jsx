import React from 'react'
import { signInWithGooglePopup, createUserAccount } from'../../../utils/firebase/firebase';
import SignUp from './signUp';
import SignIn from './signIn';
import './../../../assets/scss/auth.scss'

const Auth = () => {
  const logUser = async () => {
    try {
        const {user} = await signInWithGooglePopup();
        createUserAccount(user);
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Auth