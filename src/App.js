import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import {Routes, Route} from 'react-router-dom'
import { auth } from './util/firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';




function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      console.log(user)
    } else {
      setUser(null)
    }
  });
  function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }
  
  window.addEventListener('resize', appHeight);
  appHeight();

  return (
    <>
      <S.App>
        <Routes>
          <Route path="/" element={ user ? <LoggedIn/> : <LoggedOut />}/>
        </Routes>
      </S.App>
    </>
  );
}

export default App;

const S = {}

S.App = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 100vw;
  max-height: 100vh;
  overscroll-behavior:none;
  background: rgb(200,200,200);
  overflow: hidden;
`