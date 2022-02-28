import {getJournals, getPages, pageCounter} from './util'; 
import { useEffect, useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import { useDispatch, useSelector } from 'react-redux';

// util

import styled from 'styled-components'
import promptAction from './util/promptAction';


const S = {}

function App() {
  const dispatch = useDispatch()
  const journalsList = useSelector(state=> state.journalsList.value)
  const user = useSelector(state => state.user.value)
  /* [X] */  const [pages, setPages] = useState([[],[]])
  /* [X] */  const [currentJournal, setCurrentJournal] = useState() 
  /* [X] */  const [currentPage, setCurrentPage] = useState() 
  /* [X] */  const [isMenuOpen, setIsMenuOpen] = useState(false) 
  /* [X] */  const [unsavedChanges, setUnsavedChanges] = useState(false)
  
  /* [RM] */  const [promptTarget, setPromptTarget] = useState('') // Combine with promptSlice
  /* [RM] */  const [isJournalOpen, setIsJournalOpen] = useState() // combined into currentJournalSlice
  /* [RM] */  const [promptMsg, setPromptMsg] = useState('') // combined prompt states
  /* [RM] */  const [isPromptOpen, setIsPromptOpen] = useState(false) // combined prompt states
/* [RM] */  const [totalPages, setTotalPages] = useState() // replace with pages[3] (totalPages)
/* [RM] */  const [journalIndex, setJournalIndex] = useState() // can probably use currentjournal[1] (ID) to replace this
/* [RM] */  const [pageIndex, setPageIndex] = useState() // can probably add to currentPage[3] (index selected placeholder)

  // const handleLogin = () => Login(setUser, setUserID)
  const handleGetPages = (journalPath) => getPages(journalPath, setPages)
  const handlePrompt = (msg, target) => {
    setPromptMsg(msg)
    setPromptTarget(target) // will be a param, can change based on where its called ofc
    setIsPromptOpen(true)
  }
  // const handlePromptAction = (promptChoice) => promptAction(promptTarget, promptChoice, setIsPromptOpen, currentJournal, handleSetCurrent, setIsJournalOpen, isJournalOpen, handleGetPages)
  // const handleSetCurrent = () => {
  //   setCurrentJournal(journals[1][journalIndex])
  //   handleGetPages(journals[1][journalIndex])
  //   setIsJournalOpen(true)
  // }
  const handlePageCounter = async () => {
    pageCounter(pages, setTotalPages, setPageIndex, setCurrentPage)
    // console.log('TOTALPAGES: ', totalPages)
    // console.log('CURRENTPAGE: ', currentPage)
    // console.log('PAGEINDEX: ', pageIndex)
  }
  const handleOpenJournals = () => {
    if (unsavedChanges && isJournalOpen) {
      handlePrompt('Exit current Page without saving?', 'page')
    } else {
      setIsJournalOpen(false)
      handleClearPageState()
    }
  }
  const handleClearPageState = () => {
    if (currentPage != undefined)
    {
      setCurrentPage(undefined)
    }
  }


  // useEffect(()=>{if(pages !== [[],[]]){handlePageCounter()}},[pages])
  // useEffect( async ()=>{
  //  if (user) {
  //       let list = await getJournals()
  //       dispatch(setJournalsList(list))
  //  }
  // },[user])

  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn 
            isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
            user={user}journalIndex={journalIndex}
            setJournalIndex={setJournalIndex} promptMsg={promptMsg}
            isPromptOpen={isPromptOpen} handlePrompt={handlePrompt}
            promptTarget={promptTarget} 
            pageIndex={pageIndex} pages={pages} 
            totalPages={totalPages} currentPage={currentPage}
            isJournalOpen={isJournalOpen} handleGetPages={handleGetPages}
            setCurrentPage={setCurrentPage} currentJournal={currentJournal}
            setUnsavedChanges={setUnsavedChanges} handleOpenJournals={handleOpenJournals}
            setPageIndex={setPageIndex}
          /> 
          : 
          <LoggedOut/>
        }
      </S.App>
    </>
  );
}

export default App;

S.App = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overscroll-behavior:none;
  background: #acbcfe;
  overflow: hidden;
`
S.Tests = styled.div`
  position: absolute;
  z-index: 9999999;
  opacity: .1;
  :hover {
    opacity: 1;
  }
`
S.Test = styled.button`
  background: black;
  color: white;
`
      {/* <S.Tests> 
        <S.Test onClick={()=>getJournals(journals, setJournals)}>getJournals</S.Test>
        <S.Test onClick={()=>getPages(setPages, currentJournal)}>getPages</S.Test>
        <S.Test onClick={()=>handlePageCounter(1)}>pageCounter</S.Test>
        <S.Test onClick={()=>console.log(pageIndex)}>pageIndex</S.Test>
        <S.Test onClick={()=>console.log(pages)}>pages</S.Test>
        <S.Test onClick={()=>console.log(currentJournal)}>currentJournal</S.Test>
        <S.Test onClick={()=>console.log(currentPage)}>currentPage</S.Test>
        <S.Test onClick={()=>console.log(journalIndex)}>journalIndex</S.Test>
        <S.Test onClick={()=>console.log(journals)}>journals</S.Test>
      </S.Tests> */}