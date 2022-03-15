import styled from 'styled-components'
import React from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import {setMultiplyer} from './../../app/settings/fontSizeSlice'
import { useDispatch, useSelector } from 'react-redux'

const FontSize = (props) => {
    const darkMode = useSelector(state=>state.darkMode.value)
    const fontSize = useSelector(state=>state.fontSize.value)
    const dispatch = useDispatch()
    const handleIncrease = () => {
        if (fontSize <= 2) {
            dispatch(setMultiplyer(fontSize + .2))
            props.saveSettings()
        }
    }
    const handleDecrease = () => {
        if (fontSize >= 1) {
            dispatch(setMultiplyer(fontSize - .2))
            props.saveSettings()
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
            fontSize={fontSize}
            darkMode={darkMode}
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
    line-height: 60px;
    text-align: center;
    font-size: ${props=>props.fontSize * 1.5}rem;
    color: ${props=>props.darkMode ? 'white' : 'black'};
`
S.Increase = styled.div`
    width: 60px;
    height: 100%;
    color: ${props=>props.darkMode ? 'white' : 'black'};

`
S.Decrease = styled.div`
    width: 60px;
    height: 100%;
    color: ${props=>props.darkMode ? 'white' : 'black'};


`