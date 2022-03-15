import { lazy, Suspense, useEffect, useRef } from "react";
import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import getJournals from "../util/getJournals";
import { useDispatch, useSelector } from 'react-redux';
import { setJournalsList } from '../app/journal/journalsListSlice'
import { promptCreateNewJournal } from "./../app/prompt/promptSlice";
import { auth } from "../util/firebase";
import ImageCredit from './ImageCredit';
import SelectedBackground from './SelectedBackground';
import { setBackground } from '../app/settings/selectedBackgroundSlice';
import { toggle } from '../app/settings/darkModeSlice';
import { setMultiplyer } from '../app/settings/fontSizeSlice';
import getUserSettings from '../util/getUserSettings';
const PageEditor = lazy( ()=>import('./pageEditor/PageEditor'))
const Prompt = lazy( ()=> import('./prompt/Prompt'))
const S = {}
const renderLoader = () => <p>Loading. . .</p>;


const LoggedIn = () => {
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const darkMode = useSelector(state => state.darkMode.value)
    const promptOpen = useSelector(state => state.prompt.value.isOpen)
    const isJournalOpen = useSelector(state => state.currentJournal.value.isJournalOpen)
    const journalsLoadRef = useRef(false)
    const settingsLoadRef = useRef(false)
    async function handleGetJournalList () {
        let list = await getJournals(auth.currentUser.email)
        dispatch(setJournalsList(list))
    }


    function handleCreateJournal() {
        dispatch(promptCreateNewJournal())
    }

    const setSettingsOnLoad = async () => {
        const settings_ = await getUserSettings()
        console.log(settings_, 'settings')
        dispatch(setBackground(settings_.selectedBackground))
        dispatch(toggle(settings_.darkMode))
        dispatch(setMultiplyer(settings_.fontMultiplyer))
      }
    
    useEffect(()=>{
        if(!journalsLoadRef.current) {
            handleGetJournalList()
            journalsLoadRef.current = true

        }
        if(!settingsLoadRef.current) {
            setSettingsOnLoad()
            settingsLoadRef.current = true
        }
    })
    
    
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
            <S.CreditContainer>
                <ImageCredit/>
            </S.CreditContainer>
            <SelectedBackground/>
            <S.DarkModeFilter darkMode={darkMode}/>
        </S.LoggedIn>
    )
}

export default LoggedIn

S.LoggedIn = styled.div`
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

`

S.CreditContainer = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: fit-content;
  height: fit-content;
  color: white; 
  background: rgba(0,0,0,0.5);
  z-index: 999999999;
  a {
    text-decoration: none;
    :any-link {
      color: lightcoral;
    }
    
  }
`
S.DarkModeFilter = styled.div`
  background: ${props=> props.darkMode ? 'rgba(30,30,30,0.5)' : 'rgba(200,200,200,0.0)'};
  background-size: 100%;
  transform-origin: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  transition: 250ms;
`
