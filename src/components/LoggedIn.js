import { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import getJournals from "../util/getJournals";
import { useDispatch, useSelector } from 'react-redux';
import { setJournalsList } from '../app/journal/journalsListSlice'
import { promptCreateNewJournal } from "./prompt/promptSlice";
import { auth } from "../util/firebase";
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
    useEffect( async ()=>{
        handleGetJournalList()
       },[])
    function handleCreateJournal() {
        dispatch(promptCreateNewJournal())
    }

    
    return (
        <S.LoggedIn>
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

S.LoggedIn = styled.div``

S.CreateJournalButton = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
    width: fit-content;
    padding: 0 5px;
    height: 7vh;
    text-align: center;
    font-size: 2rem;
    line-height: 7vh;
    transition: 250ms;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid black;
    :hover {
        background: white;
    }
    @media (max-width: 300px) {
        font-size: 1rem;
    }

`
