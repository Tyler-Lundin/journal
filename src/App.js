import {getJournals, getPages, pageCounter} from './util'; 
import { useEffect, useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

// util

import styled from 'styled-components'
import promptAction from './util/promptAction';


const S = {}
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
function App() {
  
  const [user, setUser] = useState()
  const [userID, setUserID] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [journals, setJournals] = useState([[],[]]) // [[journalTitles], [journalID's]] (id for path on firestore)
  const [pages, setPages] = useState([[],[]])
  const [currentJournal, setCurrentJournal] = useState() //{title: 'default', pageIndex: [{title: 'default', content: ''}]}
  const [currentPage, setCurrentPage] = useState() //currentJournal.pageIndex[pageIndex]
  const [journalIndex, setJournalIndex] = useState()
  const [pageIndex, setPageIndex] = useState(0)
  const [totalPages, setTotalPages] = useState()
  const [promptMsg, setPromptMsg] = useState('you should not see this text right now')
  const [isPromptOpen, setIsPromptOpen] = useState(false)
  const [promptTarget, setPromptTarget] = useState('')
  const [isJournalOpen, setIsJournalOpen] = useState()
  const [unsavedChanges, setUnsavedChanges] = useState(false)

  // const handleLogin = () => Login(setUser, setUserID)
  const handleGetJournals = () => getJournals(journals, setJournals)
  const handleGetPages = (journalPath) => getPages(journalPath, setPages)
  const handlePrompt = (msg, target) => {
    setPromptMsg(msg)
    setPromptTarget(target) // will be a param, can change based on where its called ofc
    setIsPromptOpen(true)
  }
  const handlePromptAction = (promptChoice) => promptAction(promptTarget, promptChoice, setIsPromptOpen, currentJournal, handleSetCurrent, setIsJournalOpen, isJournalOpen, handleGetPages)
  const handleSetCurrent = () => {
    setCurrentJournal(journals[1][journalIndex])
    handleGetPages(journals[1][journalIndex])
    setIsJournalOpen(true)
  }
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
    }
  }



  useEffect(()=>{if(pages !== [[],[]]){handlePageCounter()}},[pages])
  useEffect(()=>{
   if (user) {
        handleGetJournals()
   }
  },[user])

  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn 
            isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
            user={user} setUser={setUser} journals={journals} journalIndex={journalIndex}
            setJournalIndex={setJournalIndex} promptMsg={promptMsg}
            isPromptOpen={isPromptOpen} handlePrompt={handlePrompt}
            promptTarget={promptTarget} handlePromptAction={handlePromptAction} 
            pageIndex={pageIndex} pages={pages} 
            totalPages={totalPages} currentPage={currentPage}
            isJournalOpen={isJournalOpen} handleGetPages={handleGetPages}
            setCurrentPage={setCurrentPage} currentJournal={currentJournal}
            setUnsavedChanges={setUnsavedChanges} handleOpenJournals={handleOpenJournals}
            setPageIndex={setPageIndex}
          /> 
          : 
          <LoggedOut setUser={setUser}/>
        }
      </S.App>
    </>
  );
}

export default App;


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