import styled from 'styled-components'
import React, {useState} from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import {setMultiplyer} from './../../app/settings/fontSizeSlice'
import { useSelector } from 'react-redux'

const FontSize = () => {
    const darkMode = useSelector(state=>state.darkMode.value)
    const [fontMultiplyer, setfontMultiplyer] = useState(1)
    const handleIncrease = () => {
        if (fontMultiplyer <= 2) {
            setfontMultiplyer(fontMultiplyer + .2)
            console.log(fontMultiplyer)
        }
    }
    const handleDecrease = () => {
        if (fontMultiplyer >= 1) {
            setfontMultiplyer(fontMultiplyer - .2)
            console.log(fontMultiplyer)
            dispatchEvent(setMultiplyer)
        }
    }
  return (
    <S.FontSize>
        <S.Decrease 
            onClick={handleDecrease}
            darkMode={darkMode}
        >
            <IoIosRemove size={'100%'}/>  
        </S.Decrease>

        <S.Display 
            fontMultiplyer={fontMultiplyer}
        >
            { darkMode ? 
                'zZ' :
                'aA'
            }
        </S.Display>

        <S.Increase 
            onClick={handleIncrease}
            darkMode={darkMode}
        >
            <IoIosAdd size={'100%'}/>
        </S.Increase>
    </S.FontSize>
  )
}

export default FontSize

const S = {}

S.FontSize = styled.div`
    width: 220px;
    height: 50px;
    display: grid;
    grid-auto-flow:column ;
    -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
`
S.Display = styled.div`
    width: 100px;
    height: 100%;
    border: 1px solid black;
    line-height: 60px;
    text-align: center;
    font-size: ${props=>props.fontMultiplyer * 1.5}rem;
    border-radius: 50px;
`
S.Increase = styled.div`
    width: 60px;
    height: 100%;

`
S.Decrease = styled.div`
    width: 60px;
    height: 100%;


`