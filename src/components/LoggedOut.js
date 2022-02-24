import styled from "styled-components";
import SignInBtn from './../assets/signinwithgoogle.png'
import JournalLogo from './../assets/JOURNAL.png'
import Login from "../util/login";
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
    :hover {
        opacity: .5;
    }
`
S.Logo = styled.img`
    width: 45vw;
    min-width: 200px;
    max-width: 340px;
`
const LoggedOut = (props) => {

    return (
        <S.LoggedOut id="LoggedOut">
            <S.Logo id="LogInLogo" src={JournalLogo}/>
            <S.SignInBtn id="LogInWithGoogleBtn" onClick={props.handleLogin} src={SignInBtn}/>
        </S.LoggedOut>
    )
}

export default LoggedOut