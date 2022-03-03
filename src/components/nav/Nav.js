import styled, {keyframes} from 'styled-components'
import OpenMenu from './../../assets/menu.png'
import CloseMenu from './../../assets/close.png'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { closeJournal } from '../journal/currentJournalSlice';
import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
import {IoIosMenu, IoIosArrowDown} from 'react-icons/io'
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
                <S.OpenMenu onClick={()=>setIsMenuOpen(!isMenuOpen)} id='OpenNavBtn'>
                    <IoIosMenu/>
                </S.OpenMenu>
                <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>

                    {/* <S.UserImageContainer>
                        {auth.currentUser ? <S.UserImage src={auth.currentUser.photoURL}/> : <></>}
                    </S.UserImageContainer> */}
                    <S.Links>
                        <S.Link onClick={()=>handleJournalsLink()}>JOURNALS</S.Link>
                        <S.CloseMenu onClick={()=>setIsMenuOpen(!isMenuOpen)} id='CloseNavBtn'>
                            <IoIosArrowDown/>
                        </S.CloseMenu>
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
S.OpenMenu = styled.div`
    width: 100%;
    height: 8vh;
    position: absolute;
    bottom: 1vh;
    color: black;
    z-index: 99999;
    font-size: 7vh;
    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;
`
S.CloseMenu = styled.div`
    width: 8vh;
    height: 8vh;
    bottom: 1vh;
    color: white;
    z-index: 999999;
    font-size: 7vh;
    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;
`
S.SlideOutMenu = styled.div`
    width: 100vw;
    height: 10vh;
    background: #3d3a4b;
    bottom: 0;
    display: grid;
    justify-content: center;
    position: absolute;
    z-index: 999998;
    animation: ${props => moveVertically((props.isMenuOpen?'200':0),(props.isMenuOpen?0:'200'))}  1s forwards;
`
S.UserImageContainer = styled.div`
    background: #3d3a4b;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    justify-self: center;
    position: absolute;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
`
S.UserImage = styled.img`
    width: 100%;
    border-radius: 50%;
`
S.Links = styled.ul`
    list-style: none;
    display: grid;
    width: 100vw;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 300;
`
S.Link = styled.li`
    cursor: pointer;
    transition: 250ms;
    color: white;
    :hover {
        color: gray;
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