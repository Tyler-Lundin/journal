import styled, {keyframes} from 'styled-components'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { closeJournal } from '../../app/journal/currentJournalSlice';
import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
import {IoIosMenu, IoIosArrowDown} from 'react-icons/io'
import PageMenu from '../nav/PageMenu';

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
                {
                    props.isJournalOpen ?
                    <PageMenu isDarkMode={props.isDarkMode} setIsDarkMode={props.setIsDarkMode}/>
                    :
                    <></>
                }
                <S.OpenMenu onClick={()=>setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} id='OpenNavBtn'>
                    <IoIosMenu/>
                </S.OpenMenu>
                <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>

                    
                    <S.Links>
                        <S.Link onClick={()=>handleJournalsLink()}>JOURNALS</S.Link>
                        {/* <S.CloseMenu onClick={()=>setIsMenuOpen(!isMenuOpen)} id='CloseNavBtn'>
                            <IoIosArrowDown/>
                        </S.CloseMenu> */}
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
    width: 8vh;
    height: 8vh;
    position: absolute;
    bottom: 1vh;
    color: black;
    z-index: 99999;
    font-size: 8vh;
    text-align: center;
    left: 50%;
    transform: translateX(50%);
    animation: ${props => moveVertically((props.isMenuOpen?'0':'-100'),(props.isMenuOpen?'-100':'0'))}  1s forwards;
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

S.Links = styled.ul`
    list-style: none;
    display: grid;
    width: 100vw;
    grid-template-columns: 2fr 2fr;
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