import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'
import { closeJournal } from '../../app/journal/currentJournalSlice';
import { auth } from '../../util/firebase';
import { signOut } from 'firebase/auth';
import {IoIosMenu, IoIosClose, IoIosSettings} from 'react-icons/io'
import {hideFirstAnimation, moveVertically, moverHorizontally} from './../../util/animations'
import Settings from '../settings/Settings';
import ImageCredit from '../ImageCredit';

const S = {} // styles below

const Nav = () => {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isSettingsOpen, setIsSettingsOpen] = useState(true)
    const darkMode = useSelector(state=> state.darkMode.value)
    const handleLogout = async () => {
        await signOut(auth)
        window.location.reload()
    }
    const handleJournalsLink = () => {
        dispatch(closeJournal())
        setIsMenuOpen(!isMenuOpen)
    } 
    const handleSettings = () => {
        setIsSettingsOpen(false)
    }

    return (
        <>
            <S.Nav id='Nav'>
                <S.OpenMenu 
                    onClick={()=>setIsMenuOpen(!isMenuOpen)} 
                    isMenuOpen={isMenuOpen} 
                    id='OpenNavBtn'
                    darkMode={darkMode}
                >
                    <IoIosMenu color='white' size={'100%'}/>
                </S.OpenMenu>
                <S.SettingsOpen darkMode={darkMode} isSettingsOpen={isSettingsOpen} onClick={()=>handleSettings()}>
                    <IoIosSettings size={'100%'}/>
                </S.SettingsOpen>
            </S.Nav>

            {/*  SETTINGS MENU  */}
            <S.SettingsContainer>

                <S.SettingsMenu isSettingsOpen={isSettingsOpen}>
                    <S.CloseMenu onClick={()=>setIsSettingsOpen(!isSettingsOpen)}>
                        <IoIosClose color={darkMode ? 'white' : 'black'}/>
                    </S.CloseMenu>
                    <Settings/>
                    <ImageCredit/>
                </S.SettingsMenu>
            </S.SettingsContainer>

            {/* MAIN NAV MENU */}
            <S.SlideMenuContainer>
                <S.SlideMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>
                        <S.CloseMenu onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                            <IoIosClose color='white'/>
                        </S.CloseMenu>
                        
                        <S.Links>
                            <S.Link onClick={()=>handleJournalsLink()}>JOURNALS</S.Link>
                            {/* <S.Link onClick={()=>handleSettings()}>SETTINGS</S.Link> */}
                            <S.Link onClick={()=>handleLogout()}>LOGOUT</S.Link>
                        </S.Links>                 
                </S.SlideMenu>
            </S.SlideMenuContainer>
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
    color: 'white';
    background: rgba(0,100,125,.6);
    border-radius: 100%;
    z-index: 250;
    font-size: 8vh;
    animation: ${props => moveVertically((props.isMenuOpen?'0':'-100'),(props.isMenuOpen?'-100':'0'))}  1s forwards;
    svg {
        transition: .3s;
        transform: translateY(-3%);
    }
    svg:hover {
        transform: translateY(-3%) rotate(180deg) scaleY(140%);
    }
`
S.CloseMenu = styled.div`
    width: 8vh;
    height: 8vh;
    z-index: 450;
    font-size: 7vh;
    text-align: center;
    position: absolute;
    justify-self: right;
    svg {
        transition: 300ms;
    }
    svg:hover {
        transform: rotate(90deg) scale(130%);
    }
`
S.SlideMenu = styled.div`
    width: 100vw;
    height: 100vh;
    /* height: calc(var(--vh, 1vh) * 100); */
    background: rgba(100,10,50,0.8);
    display: grid;
    justify-content: center;
    position: absolute;
    z-index: 400;
    animation: ${props => moveVertically((props.isMenuOpen?'110':0),(props.isMenuOpen?0:'110'))}  1s forwards;
`
S.SlideMenuContainer = styled.div`
    animation: ${hideFirstAnimation} 1s forwards;
    position: absolute;
    z-index: 399;
    display: ${props=>props.isMenuOpen? 'none' : 'block'};
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
S.SettingsContainer = styled.div`
    animation: ${hideFirstAnimation} 1s forwards;
    /* height: calc(var(--vh, 1vh) * 100); */
    position: absolute;
    z-index: 349;
    top: 0;
    right: 0;
`
S.SettingsMenu = styled.div`
    width: 300px;
    height: 100vh;
    /* height: calc(var(--vh, 1vh) * 100); */
    position: relative;
    z-index: 350;
    top: 0;
    right: 0;
    animation: ${props => moverHorizontally((props.isSettingsOpen?'110':0),(props.isSettingsOpen?0:'110'))}  1s forwards;
`
S.SettingsOpen = styled.div`
    width: 8vh;
    height: 8vh;
    background: rgba(0,100,125,.6);
    color: white;
    position: absolute;
    z-index: 300;
    bottom: 0;
    right: 2%;
    border-radius: 100%;
    animation: ${props => moverHorizontally((props.isSettingsOpen?'0':'210'),(props.isSettingsOpen?'210':'0'))}  1s forwards;
    svg {
        transition: 30s;
    }
    svg:hover {
        transform: rotate(3600deg) scale(115%);
    }
`

S.CreditContainer = styled.div`
  position: absolute;
  width: 20vw;
  height: fit-content;
  color: white; 
  background: rgba(0,0,0,0.5);
  z-index: 60;
  a {
    text-decoration: none;
    :any-link {
      color: lightcoral;
    }
    
  }
`