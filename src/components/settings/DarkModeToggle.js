import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, to } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../app/settings/darkModeSlice'

const DarkModeToggle = () => {
    const dispatch = useDispatch()
    const check = useSelector( state => state.darkMode.value)
    const [isToggled, setIsToggled] = useState(false)
    const [{x}, toggleAnimation] = useSpring(()=>({
        x: 0,
        config: config.gentle
    }))
    const handleClick = () => {
        toggleAnimation({ x: isToggled ? 0 : 100})
        setIsToggled(!isToggled)
        dispatch(toggle(isToggled))
        console.log(check)
    }
  return (
    <S.Container
        onClick={handleClick}
    >
        <S.Slider style={{ transform: to([x],(v) => `translateX(${v}%)`) }} />
    </S.Container>
  )
}

export default DarkModeToggle

const S = {}

S.Container = styled(animated.div)`
    background: rgb(40,40,40);
    width: 3vw;
    height: 2vw;
    border-radius: 50px;
    display: grid;
    align-items: center;
    outline: 1px solid silver;
    padding: 0 3px;
    /* :hover > div {
        transform: translateX(100%);
        background: darkblue;
    } */
`

S.Slider = styled(animated.div)`
    background: silver;
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 100%;
    position: absolute;
    transition: 250ms;
`