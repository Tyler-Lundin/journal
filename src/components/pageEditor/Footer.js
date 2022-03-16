import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Footer = (props) => {
    const darkMode = useSelector(state => state.darkMode.value)

  return (
    <S.Footer darkMode={darkMode}>
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
S.SaveButton = styled.div`
    width: fit-content;
    font-size: 1rem;
    cursor: pointer;

`
S.PageButton = styled.div`
    width: fit-content;
    font-size: 1rem;
    cursor: pointer;
`