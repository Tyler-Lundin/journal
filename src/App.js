import { app, auth, provider, db, getJournals, getPages } from './util'; 
import { useEffect, useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

// util
import Login from './util/login';

import styled from 'styled-components'
import promptMessage from './util/promptMessage';


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
  const [promptMsg, setPromptMsg] = useState('you should not see this text right now')
  const [isPromptOpen, setIsPromptOpen] = useState(false)
  const [promptTarget, setPromptTarget] = useState('')


  const handleLogin = () => Login(setUser, setUserID)
  const handleGetJournals = () => getJournals(userID, journals, setJournals)
  const handleGetPages = () => getPages(userID, pages, setPages, currentJournal)
  const handlePrompt = (msg, target) => {
    setPromptMsg(msg)
    setPromptTarget(target) // will be a param, can change based on where its called ofc
    setIsPromptOpen(true)
  }
  const handlePromptAction = (promptChoice) => promptMessage(promptTarget, promptChoice, setIsPromptOpen, currentJournal)
  const handleSetCurrent = (journal, page) => {
    setCurrentJournal(journal)
    setCurrentPage(page)
  }
  useEffect(()=>console.log(currentJournal),[currentJournal])
  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn 
            isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
            user={user} 
            setJournalIndex={setJournalIndex} promptMsg={promptMsg}
            isPromptOpen={isPromptOpen} handlePrompt={handlePrompt}
            promptTarget={promptTarget} handlePromptAction={handlePromptAction}
          /> 
          : 
          <LoggedOut handleLogin={handleLogin}/>
        }
      </S.App>
    </>
  );
}

export default App;
