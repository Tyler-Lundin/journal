import styled, {keyframes} from "styled-components";
import JournalLogo from './../assets/JOURNAL.png'
import { upDown } from "../util/animations";
import Login from './Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { clrJournalsList } from './journal/journalsListSlice';
import { clrPagesList } from './pageEditor/pagesListSlice'
import { clrCurrentJournal } from './journal/currentJournalSlice';
import { clrCurrentPage } from './pageEditor/currentPageSlice';


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


const LoggedOut = (props) => {
    const [counter, setCounter] = useState(0)
    const dispatch = useDispatch()
    function clearStateSignout () {
        dispatch(clrJournalsList())
        dispatch(clrPagesList())
        dispatch(clrCurrentJournal())
        dispatch(clrCurrentPage())
        setCounter(0)
      }
      useEffect(()=>{
        if (counter > 1) {
            clearStateSignout()
        }
      }
    ,[])
    console.log(counter)
    return (
        <S.LoggedOut id="LoggedOut">
            <S.Logo id="LogInLogo" src={JournalLogo}/>
            <Login setUser={props.setUser}/>            
            {/* <S.SignInBtn id="LogInWithGoogleBtn" onClick={props.handleLogin} src={SignInBtn}/> */}
        </S.LoggedOut>
    )
}

export default LoggedOut