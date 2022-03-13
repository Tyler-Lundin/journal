import styled, {keyframes} from 'styled-components'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { closeJournal } from '../../app/journal/currentJournalSlice';
import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
import {IoIosMenu, IoIosClose} from 'react-icons/io'
// import PageMenu from '../nav/PageMenu';

const S = {} // styles below

const Nav = (props) => {

    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const handleLogout = async () => {
        await signOut(auth)
        
    }
    const handleJournalsLink = () => {
        dispatch(closeJournal())
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <S.Nav id='Nav'>
                <S.OpenMenu onClick={()=>setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} id='OpenNavBtn'>
                    <IoIosMenu/>
                </S.OpenMenu>
            </S.Nav>
            <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>
                    <S.CloseMenu onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        <IoIosClose/>
                    </S.CloseMenu>
                    
                    <S.Links>
                        <S.Link onClick={()=>handleJournalsLink()}>JOURNALS</S.Link>
                        <S.Link onClick={()=>handleLogout()}>LOGOUT</S.Link>
                    </S.Links>                 
            </S.SlideOutMenu>
        </>
    
    )
}

export default Nav

S.Nav = styled.div`
    width: 100%;
    height: 8vh;
    top: calc(var(--vh, 1vh) * 90);
    overflow: hidden;
    position: absolute;
    display: grid;
    justify-items: center;
`
S.OpenMenu = styled.div`
    width: 8vh;
    height: 8vh;
    position: absolute;
    color: black;
    z-index: 999997;
    font-size: 8vh;
    animation: ${props => moveVertically((props.isMenuOpen?'0':'-100'),(props.isMenuOpen?'-100':'0'))}  1s forwards;
`
S.CloseMenu = styled.div`
    width: 8vh;
    height: 8vh;
    color: white;
    z-index: 999999;
    font-size: 7vh;
    text-align: center;
    position: absolute;
    justify-self: right;
`
S.SlideOutMenu = styled.div`
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background: #3d3a4b;
    display: grid;
    justify-content: center;
    position: absolute;
    z-index: 999998;
    animation: ${props => moveVertically((props.isMenuOpen?'110':0),(props.isMenuOpen?0:'110'))}  1s forwards;
`

S.Links = styled.ul`
    list-style: none;
    display: grid;
    width: 100vw;
    justify-items: center;
    align-items: center;
    font-size: clamp(5vw, 8vw, 10vw);
    font-weight: 700;
    font-family: 'paralucent';
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