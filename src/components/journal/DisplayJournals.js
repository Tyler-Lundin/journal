import React from 'react'
import styled from 'styled-components'
import { upDown } from '../../util/animations'
import {IoIosAdd} from 'react-icons/io'

const S = {}

const DisplayJournals = (props) => {
    const {children,handleCreateJournal} = props

    return (
        <S.Scroller>
            <S.DisplayJournals id='journalsDisplay'>
                {children}
                <S.CreateJournal onClick={()=>handleCreateJournal()}>
                    <IoIosAdd color='rgba(255,255,255,0.5)' size={'100%'}/>
                </S.CreateJournal>
            </S.DisplayJournals>
        </S.Scroller>
    )
}

export default DisplayJournals

S.Scroller = styled.div`
    position:absolute;
    z-index: 150;
    overflow-y: visible;
    top: 40%;
    transform: translateY(-50%);
    height: 70vh;
    display: grid;
    align-content: center;
`
S.DisplayJournals = styled.div`
    max-width: 100vw;
    height: 100%;
    align-items: center;
    display: grid;
    grid-auto-flow:column;
    grid-gap: 1.5rem;
    overflow-x: auto;
    padding-bottom: 4rem;
    ::-webkit-scrollbar {display:none;}
    ::after {
        content: "";
        display: block;
        right: -2rem;
        width: 2rem;
        height: 1px;
    }
    ::before {
        content: "";
        display: block;
        right: -2rem;
        width: 2rem;
        height: 1px;
    }
`

S.CreateJournal = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background: rgba(0, 150, 50, 0.5);
    border-radius: 100%;
    align-self: center;
    transition: 1s;
    animation: ${upDown} 2.5s infinite alternate ease-out;
    box-shadow: 0px 5px 10px 0px black;
    margin: 0 65px;
    :hover{
        background: rgba(0, 200, 90, 0.9);
    }
    svg {
        transition: 2s;
    }
    svg:hover {
        transform: rotate(-720deg) scale(135%);
    }
`