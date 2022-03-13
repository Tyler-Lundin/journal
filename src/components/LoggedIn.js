import { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import getJournals from "../util/getJournals";
import { useDispatch, useSelector } from 'react-redux';
import { setJournalsList } from '../app/journal/journalsListSlice'
import { promptCreateNewJournal } from "./../app/prompt/promptSlice";
import { auth } from "../util/firebase";
import Settings from "./settings/Settings";
const PageEditor = lazy( ()=>import('./pageEditor/PageEditor'))
const Prompt = lazy( ()=> import('./prompt/Prompt'))
const S = {}
const renderLoader = () => <p>Loading</p>;


const LoggedIn = () => {
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const promptOpen = useSelector(state => state.prompt.value.isOpen)
    const isJournalOpen = useSelector(state => state.currentJournal.value.isJournalOpen)
    async function handleGetJournalList () {
        let list = await getJournals(auth.currentUser.email)
        dispatch(setJournalsList(list))
    }
    useEffect(()=>{
        handleGetJournalList()
    },[])
    function handleCreateJournal() {
        dispatch(promptCreateNewJournal())
    }

    
    return (
        <S.LoggedIn>
            <Settings/>
            {
                isJournalOpen? 
                <Suspense fallback={renderLoader()}>
                    <PageEditor/>
                </Suspense>
                : <></>
            }
            {
                promptOpen? 
                <Suspense fallback={renderLoader()}>
                    <Prompt getJournalList={handleGetJournalList}/> 
                </Suspense>
                : <></>
            }
            {
                isJournalOpen ? <></> :           
                <DisplayJournals handleCreateJournal={handleCreateJournal}>
                    {journalsList.journalTitles.map((title, index)=>
                        <Journal title={title} key={index} index={index} /> 
                    )}
                </DisplayJournals>
            }
            <Nav isJournalOpen={isJournalOpen}/>
        </S.LoggedIn>
    )
}

export default LoggedIn

S.LoggedIn = styled.div`
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

`


