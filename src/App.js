import React from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { auth } from './util/firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
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
      <S.App >
        { user ? <LoggedIn/> : <LoggedOut />}
      </S.App>
    </>
  );
}

export default App;

const S = {}

S.App = styled.div`
  background: rgb(30,30,30);
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 100vw;
  max-height: 100vh;
  overscroll-behavior:none;
  overflow: hidden;
`
