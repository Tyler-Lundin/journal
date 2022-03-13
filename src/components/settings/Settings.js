import styled from 'styled-components'

import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Settings = () => {
  return (
    <S.Settings>
        <DarkModeToggle/>
    </S.Settings>
  )
}

export default Settings

const S = {}

S.Settings = styled.div`
    width: 100vw;
    height: 60px;
    position: absolute;
    z-index: 1000;
`