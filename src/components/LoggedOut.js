import styled from "styled-components";
import { upDown } from "../util/animations";
import { useDispatch } from 'react-redux';
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

S.Journal = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    background: #3d3a4b;
    border-radius: 12px;
    animation: ${upDown} 2.5s infinite alternate ease-out;
    box-shadow: 0px 5px 10px 0px black;

`
S.JournalTitle = styled.h2`
    text-align: center;
    white-space: nowrap;
    font-family: 'le-havre';
    font-size: 2.2rem;
    color: white;
`
S.TitleContainer = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-43%);
    max-width: 220px;
`


const LoggedOut = () => {
    const dispatch = useDispatch()


    return (
        <S.LoggedOut id="LoggedOut">
            <S.Journal>
                <S.TitleContainer>
                    <S.JournalTitle>Journal</S.JournalTitle>
                </S.TitleContainer>
            </S.Journal>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            <S.Signature>Created by Tyler Lundin</S.Signature>
        </S.LoggedOut>
    )
}

export default LoggedOut

S.Signature = styled.h5`
    position: absolute;
    color: rgba(0,0,0,0.5);
    text-align: center;
    bottom: 5px;
`