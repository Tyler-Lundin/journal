import styled from 'styled-components'

import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { IoIosSunny, IoIosMoon } from 'react-icons/io'
import FontSize from './FontSize'
import { useSelector } from 'react-redux'
import { animated, config, useSpring, to } from 'react-spring'

const Settings = () => {
  const darkMode = useSelector(state=>state.darkMode.value)

  const handleClick = () => {
    console.log('click')
  }


  return (
    <S.Settings>
      <S.DarkMode>
        <S.Moon 
          onClick={()=>handleClick} 
        >
          <IoIosMoon size={'100%'} color={!darkMode ? 'black' : 'yellow'}/>
        </S.Moon>
        <DarkModeToggle />
        <S.Sun onClick={handleClick}>
          <IoIosSunny size={'100%'} color={darkMode ? 'black' : 'yellow'}/>
        </S.Sun>
      </S.DarkMode>
      <S.FontSize>
        <FontSize/>
      </S.FontSize>
    </S.Settings>
  )
}

export default Settings

const S = {}

S.Settings = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: grid;
    justify-content: center;
    justify-items:center ;
    background: rgb(103, 99, 130);
    padding: 5vh 0;
    z-index: 1000;
    grid-gap: 5vw;
    align-content: center;
`

S.SettingsLabel = styled.h1`
  font-family: 'paralucent';
  justify-self: right;
`

S.DarkMode = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-items: center;
  grid-template-columns: 50px 1fr 50px;
  `
S.FontSize = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-items: center;
  `

  S.Moon = styled(animated.div)`
    position: relative;
  `

  S.Sun = styled(animated.div)`
  
  `