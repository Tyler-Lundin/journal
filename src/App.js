import {getJournals, getPages, pageCounter} from './util'; 
import { useEffect, useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';


// util

import styled from 'styled-components'

const S = {}

function App() {
  const dispatch = useDispatch()
  const journalsList = useSelector(state=> state.journalsList.value)
  const user = useSelector(state => state.user.value)
  const [signedIn, setSignedIn] = useState(false)
  
  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn /> 
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