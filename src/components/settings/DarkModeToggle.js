import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, to } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../app/settings/darkModeSlice'

const DarkModeToggle = (props) => {
    const {saveSettings} = props
    const dispatch = useDispatch()
    const darkMode = useSelector(state=>state.darkMode.value)
    const [isToggled, setIsToggled] = useState(false)
    const [{x}, toggleAnimation] = useSpring(()=>({
        x: !darkMode ? 0 : 100,
        config: { mass: 1, tension: 0, friction: 20 , velocity: 100}
    }))
    const handleClick = () => {
        toggleAnimation({ x: !darkMode ? 0 : 100})
        setIsToggled(!isToggled)
        dispatch(toggle(!isToggled))
        saveSettings(isToggled)
    }
  return (
    <S.Container
        onClick={handleClick}
        darkMode={darkMode}
    >
        <S.Slider 
            style={{ transform: to([x],(v) => `translateX(${v}%)`) }} 
            darkMode={darkMode}
        />
    </S.Container>
  )
}

export default DarkModeToggle

const S = {}

S.Container = styled(animated.div)`
    background: rgba(${props=>props.darkMode ? '0, 230, 150, 0.4' : '240,40,40, 0.5'});
    width: 55px;
    height: 30px;
    border-radius: 50px;
    display: grid;
    align-items: center;
    outline: 1px solid rgb(45,45,45);
    box-shadow: inset 0 0 2px 0 black;
`

S.Slider = styled(animated.div)`
    background:  rgb(60,60,60);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    position: absolute;
    transition: 250ms;
    margin: 0 2px;
`