import React from 'react'
import { GoogleLogin } from 'react-google-login'
// refresh token
import { refreshTokenSetup } from '../../util/refreshToken'
import { useDispatch } from 'react-redux'
import { setUser } from './userSlice'
import styled from 'styled-components'

const clientId =
  '56356826329-i6jr7h582u1l3b8c07kp2kdrvqnp9m5f.apps.googleusercontent.com';


function Login(props) {  
  const dispatch = useDispatch()
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    dispatch(setUser(res.profileObj))
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log(res);

  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '50px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

// https://github.com/Sivanesh-S/react-google-authentication
// CREDIT TO SIVANESH-S FOR HIS BLOG POST ON HOW TO SET IT ALL UP