import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { promptAccept, promptCancel, promptDeleteWarning } from '../../app/prompt/promptSlice'
import { openJournal } from '../../app/journal/currentJournalSlice'
import createJournal from '../../util/createJournal'
import React, { useRef, useState } from 'react'
import deleteJournal from '../../util/deleteJournal'
import { auth } from '../../util/firebase'

const Prompt = (props) => {

    const {
        getJournalList
    } = props
    const dispatch = useDispatch()
    const promptMessage = useSelector(state => state.prompt.value.message)
    const promptAction = useSelector(state => state.prompt.value.action)
    const selectedTitle = useSelector(state => state.currentJournal.value.currentTitle)
    const selectedID = useSelector(state => state.currentJournal.value.currentID)
    const newTitleRef = useRef()
    const [deleteJournalCheck, setDeleteJournalCheck] = useState(false)

    const handleCancel = () => dispatch( promptCancel() )
    const handleConfirm = () => {
        if (promptAction === 'OpenJournal') {
            dispatch( promptAccept('OpenJournalAccepted') )
            dispatch( openJournal() )
        }
        if (promptAction === 'NewJournal') {
            dispatch ( promptAccept('NewJournalAccepted'))
            createJournal(newTitleRef.current.value, auth.currentUser.email)
            getJournalList()
        }
        if (deleteJournalCheck) {
            deleteJournal(selectedID)
            dispatch ( promptAccept('JournalDeleted'))
            getJournalList()
        }

    }
    const handleDelete = async () => {
        setDeleteJournalCheck(!deleteJournalCheck)
        dispatch( promptDeleteWarning(selectedTitle) )
        
    }

    return (
        <>
            <S.Shadow>
                <S.Prompt>
                    { promptAction === 'NewJournal' ? 
                        <S.TitleInputContainer>
                            <S.SmallMessage>Create New Journal</S.SmallMessage>
                            <S.TitleInput maxLength={25} ref={newTitleRef}/>

                        </S.TitleInputContainer>

                    :
                        
                            !deleteJournalCheck ? 
                            <S.OpenJournalContainer>
                                <S.DeleteJournal onClick={handleDelete}>DELETE JOURNAL</S.DeleteJournal>
                                <S.MessageContainer>
                                    <S.Message>Open</S.Message>
                                    <S.Message>{promptMessage}</S.Message>
                                </S.MessageContainer>
                            </S.OpenJournalContainer>
                            :
                        
                            <S.Message>{promptMessage}</S.Message>
                            
                        
                    }
                    <S.Btns>    
                        <S.Cancel onClick={handleCancel}>CANCEL</S.Cancel> 
                        <S.Confirm onClick={handleConfirm}>CONFIRM</S.Confirm>
                    </S.Btns>
                </S.Prompt>
            </S.Shadow>
        </>
    )
}

export default Prompt

const S = {}
S.Shadow = styled.div`
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 500;
    position: absolute;
`
S.Prompt = styled.div`
    width: 70vw;
    min-height: 30vh;
    background: rgb(50,50,50);
    border-radius: 10px;
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-rows: 2fr 1fr;
    text-align:center ;

`
S.SmallMessage = styled.div`
    color: white;
    font-size: 1.5rem;
    align-self: center;
`
S.Message = styled.div`
    color: white;
    font-size: 2rem;
    align-self: center;
    @media (max-width: 420px){
        font-size: 1.5rem;
    }
`
S.Btns = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    bottom: 0;
    line-height: 3rem;
`
S.Confirm = styled.div`
    min-width: 70px;
    width: 25vw;
    height: 3rem;
    border-radius: 10px;
    transition: 250ms;
    color: white;
    :hover {
        background: rgba(255,255,255,0.2);
        cursor: pointer;
    }
`
S.Cancel = styled.div`
    min-width: 70px;
    width: 25vw;
    height: 3rem;
    border-radius: 10px;
    transition: 250ms;
    color: white;
    :hover {
        background: rgba(255,255,255,0.2);
        cursor: pointer;
    }
`
S.OpenJournalContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-rows: 1rem 1fr;
`
S.MessageContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 50%;
    align-self: center;
`
S.TitleInputContainer = styled.div`
    display: grid;
    justify-items: center;
`
S.TitleInput = styled.input`
    outline: none;
    font-size: 1.5rem;
    text-align: center;
    width: 80%;
    height: 4rem;
`

S.DeleteJournal = styled.div`
    color: gray;
    width: fit-content;
    height: fit-content;
    margin-top: 10px;

    :hover {
        color: red;
        cursor: pointer;
    }
`