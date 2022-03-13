import React from 'react'
import styled from 'styled-components'
import savePage from '../../util/savePage'
import { auth } from '../../util/firebase';

const Footer = (props) => {
    const {
        currentJournal,
        pagesList
    } = props
    function handleSaveChanges(){
        savePage(auth.currentUser.email, currentJournal, pagesList[0], pagesList[1])
    }
    const handlePageMenu = () => {
        // open page menu
    }
  return (
    <S.Footer>
        <S.SaveButton onClick={()=>handleSaveChanges()}>save</S.SaveButton>
        <S.PageButton onClick={handlePageMenu}>page</S.PageButton>
    </S.Footer>
  )
}

export default Footer

const S = {}

S.Footer = styled.div`
    width: 100%;
    height: 10vh;
    height: calc(var(--vh, 1vh) * 10);
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns:1fr 1fr ;
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