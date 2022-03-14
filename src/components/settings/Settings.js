import styled from 'styled-components'

import React, { useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { IoIosSunny, IoIosMoon } from 'react-icons/io'
import FontSize from './FontSize'
import SelectBackground from './SelectBackground'
import { useSelector } from 'react-redux'
import getUserSettings from '../../util/getUserSettings'
import saveUserSettings from '../../util/saveUserSettings'

const Settings = () => {

  const darkMode = useSelector(state=>state.darkMode.value)
  const selectedBackground = useSelector(state=>state.selectedBackground.value)
  const fontSize = useSelector(state=>state.fontSize.value)

  const handleClick = () => {
    console.log('click')
  }

  const saveSettings = async (dM, fS, sB) => {
    if (dM === '_' && fS === '_') {
      await saveUserSettings(darkMode, fontSize, sB)

    } else {
      await saveUserSettings(darkMode, fontSize, selectedBackground)

    }
  }

  return (
    <S.Settings>
      
      <S.DarkMode>
        <S.Moon>
          <IoIosMoon size={'100%'} color={!darkMode ? 'black' : 'yellow'}/>
        </S.Moon>
        <DarkModeToggle  saveSettings={saveSettings}/>
        <S.Sun onClick={handleClick}>
          <IoIosSunny size={'100%'} color={darkMode ? 'black' : 'yellow'}/>
        </S.Sun>
      </S.DarkMode>

      <S.FontSize>
        <FontSize  saveSettings={saveSettings}/>
      </S.FontSize>

      <S.SelectBackground>
        <SelectBackground saveSettings={saveSettings}/>
      </S.SelectBackground>
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
    justify-items: center;
    background: rgba(103, 99, 130,0.1);
    padding: 5vh 0;
    z-index: 1000;
    grid-gap: 5vw;
    align-content: center;
    transform: translateY(-5%);
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

  S.Moon = styled.div`
    position: relative;
  `

  S.Sun = styled.div`
  
  `

  S.SelectBackground = styled.div`
  
  `