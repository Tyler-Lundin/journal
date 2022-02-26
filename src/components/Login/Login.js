import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../util/refreshToken';

const clientId =
  '56356826329-i6jr7h582u1l3b8c07kp2kdrvqnp9m5f.apps.googleusercontent.com';

function Login(props) {
  const {
    setUser
  } = props
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setUser(res.profileObj)
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;