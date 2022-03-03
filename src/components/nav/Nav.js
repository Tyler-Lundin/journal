import styled, {keyframes} from 'styled-components'
import OpenMenu from './../../assets/menu.png'
import CloseMenu from './../../assets/close.png'
import { useGoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { clearUser } from '../Login/userSlice';
import { clrPagesList } from '../pageEditor/pagesListSlice'
import { closeJournal } from '../journal/currentJournalSlice';
import { clrJournalsList } from '../journal/journalsListSlice'
import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
const S = {} // styles below

const Nav = () => {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    async function handleLogout() {
        await signOut(auth)
        
    }
    function handleJournalsLink () {
        dispatch(closeJournal())
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <S.Nav id='Nav'>
                <S.Toggle onClick={()=>setIsMenuOpen(!isMenuOpen)} id='ToggleNavBtn'>
                    <S.Icon src={isMenuOpen ? OpenMenu : CloseMenu}/>
                </S.Toggle>
                <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>
                    <S.UserImageContainer>
                        {auth.currentUser ? <S.UserImage src={auth.currentUser.photoURL}/> : <></>}
                    </S.UserImageContainer>
                    <S.Links>
                        <S.Link onClick={()=>handleJournalsLink()}>JOURNALS</S.Link>
                        {/* <S.Link>SETTINGS</S.Link> */}
                        <S.Link onClick={()=>handleLogout()}>LOGOUT</S.Link>
                    </S.Links>                 
                </S.SlideOutMenu>
            </S.Nav>
        </>
    
    )
}

export default Nav

S.Nav = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
`
S.Toggle = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3vh;
    right: 3vh;
    z-index: 999999;

`
S.Icon = styled.img`
width: 100%;
` //
S.SlideOutMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #489fff;
    display: grid;
    grid-template-rows: 1fr 3fr;
    justify-content: center;
    position: relative;
    z-index: 999998;
    animation: ${props => moveVertically((props.isMenuOpen?'100':0),(props.isMenuOpen?0:'100'))}  1s forwards;
`
S.UserImageContainer = styled.div`
    background: #8fc4ff;
    width: 180px;
    height: 180px;
    margin-top: 2rem;
    border-radius: 50%;
`
S.UserImage = styled.img`
    width: 100%;
    border-radius: 50%;
`
S.Links = styled.ul`
    list-style: none;
    display: grid;
    justify-items: center;
    align-content: space-evenly;
    font-size: 1.5rem;
    font-weight: 300;
`
S.Link = styled.li`
    cursor: pointer;
    transition: 250ms;
    :hover {
        color: white;
    }
`
const moveVertically = (y,x) =>
  keyframes`
    0% {
      transform: translateY(${x}%);
    }
    100% {
      transform: translateY(${y}%);
    }
`