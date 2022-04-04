import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Footer = (props) => {
    const {pageIndex, pageAmount, } = props
    const darkMode = useSelector(state => state.darkMode.value)
    const fontSize = useSelector(state => state.fontSize.value)

  return (
    <S.Footer darkMode={darkMode}>
      <S.CounterContainer >
        <S.PageCounter 
          darkMode={darkMode} 
          fontSize={fontSize}
        >
            {pageIndex}/{pageAmount}
        </S.PageCounter>
      </S.CounterContainer >
    </S.Footer>
  )
}

export default Footer

const S = {}

S.Footer = styled.div`
    width: 100%;
    height: 10vh;
    /* height: calc(var(--vh, 1vh) * 10); */
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns:1fr 1fr ;
    color: ${props => props.darkMode ? 'white' : 'black'};
`
S.CounterContainer = styled.div`
    display: grid;
    justify-content: center;
    position: absolute;
    left: 5vw;
`