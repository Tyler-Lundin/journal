import { app, auth, provider, db, getJournals, getPages } from './util'; 
import { useEffect, useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

// util
import Login from './util/login';

import styled from 'styled-components'


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
  const [journals, setJournals] = useState([[],[]])
  const [pages, setPages] = useState([[],[]])
  const [currentJournal, setCurrentJournal] = useState() //{title: 'default', pageIndex: [{title: 'default', content: ''}]}
  const [currentPage, setCurrentPage] = useState() //currentJournal.pageIndex[pageIndex]
  const [pageIndex, setPageIndex] = useState(0)


  const handleLogin = () => Login(setUser, setUserID)
  const handleGetJournals = () => getJournals(userID, journals, setJournals)
  const handleGetPages = () => getPages(userID, pages, setPages, currentJournal)
  useEffect(()=>console.log(currentJournal),[currentJournal])
  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user} setCurrentJournal={setCurrentJournal}/> 
          : 
          <LoggedOut handleLogin={handleLogin}/>
        }
      </S.App>
    </>
  );
}

export default App;
