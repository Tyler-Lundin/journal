import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import PageEditor from "./pageEditor/PageEditor";
import Prompt from "./prompt/Prompt";
import { useState, useEffect } from "react";
import { getJournals } from "../util";

import { useDispatch, useSelector } from 'react-redux';
import { setJournalsList } from './journal/journalsListSlice'
import { CONSOLE_APP_INFO } from "../App";

const S = {}
S.LoggedIn = styled.div`

`
const LoggedIn = () => {

    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const promptOpen = useSelector(state => state.prompt.value.isOpen)
    const isJournalOpen = useSelector(state => state.currentJournal.value.isJournalOpen)
    const user = useSelector(state => state.user.value)
    useEffect( async ()=>{
        if (user) {
             let list = await getJournals()
             dispatch(setJournalsList(list))
        }
       },[])
    
    return (
        <S.LoggedIn>
            {
                isJournalOpen? <PageEditor /> : <></>
            }
            {
                promptOpen? <Prompt/> : <></>
            }
            {
                isJournalOpen ? <></> :           
                <DisplayJournals>
                    {journalsList.journalTitles.map((title, index)=>
                        <Journal title={title} key={index} index={index} /> 
                    )}
                </DisplayJournals>
            }
            <Nav/>
        </S.LoggedIn>
    )
}

export default LoggedIn