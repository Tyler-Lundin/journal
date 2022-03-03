import styled from "styled-components";
import JournalLogo from './../assets/JOURNAL.png'
import { upDown } from "../util/animations";
import { useDispatch } from 'react-redux';
import { setUser } from './Login/userSlice'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};





const S = {}
S.LoggedOut = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-items:center;
    align-items: center;
    align-content: space-evenly;
`
S.SignInBtn = styled.img`
    min-width: 200px;
    max-width: 300px;
    width: 40vw;
    transition: 250ms;
`
S.Logo = styled.img`
    width: 45vw;
    min-width: 200px;
    max-width: 340px;
    animation: ${upDown} 3s infinite alternate;
`


const LoggedOut = () => {
    const dispatch = useDispatch()


    return (
        <S.LoggedOut id="LoggedOut">
            <S.Logo id="LogInLogo" src={JournalLogo}/>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </S.LoggedOut>
    )
}

export default LoggedOut