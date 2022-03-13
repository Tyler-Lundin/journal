import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { auth } from './util/firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';




function App() {
  const [user, setUser] = useState(null)
  const isDarkModeEnabled = useSelector(state => state.darkMode.value)
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
        <Routes>
          <Route path="/" element={ user ? <LoggedIn/> : <LoggedOut />}/>
        </Routes>
        <S.Dark isDarkModeEnabled={isDarkModeEnabled}/>
        <S.Light isDarkModeEnabled={isDarkModeEnabled}/>
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
  overflow: hidden;
`
S.Dark = styled.div`
  background: rgb(40,40,40);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: 250ms;
  opacity: ${props => props.isDarkModeEnabled ? 1 : 0};
`

S.Light = styled.div`
  background: rgb(200,200,200);
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  transition: 250ms;
  opacity: ${props => props.isDarkModeEnabled ? 0 : 1};
`