import { useGoogleLogout } from 'react-google-login';

function signOut() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
      };
    
      const onFailure = () => {
        console.log('Handle failure cases');
      };
    

}

export default signOut