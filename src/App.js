import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { auth } from './util/firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import darkBG from './images/shot-by-cerqueira-0o_GEzyargo-unsplash.jpg'
import lightBG from './images/laura-vinck-Hyu76loQLdk-unsplash.jpg'
import { spin } from './util/animations';
import ImageCredit from './components/ImageCredit';


function App() {
  const [user, setUser] = useState(null)
  const darkMode = useSelector(state => state.darkMode.value)
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
        <S.CreditContainer>
          <ImageCredit/>
        </S.CreditContainer>
        <S.Dark darkMode={darkMode}/>
        <S.Light darkMode={darkMode}/>
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
S.Dark = styled.div`
  background: rgb(30,30,30);
  background-image: url(${lightBG});
  background-size: 150%;
  transform-origin: center;
  width: 100vh;
  height: 100vw;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  /* animation: ${spin}  15s linear infinite ; */
  transition: 250ms;
  opacity: ${props => props.darkMode ? .5 : 0};
`

S.Light = styled.div`
  background: rgb(200,200,200);
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  transition: 250ms;
  opacity: ${props => props.darkMode ? 0 : 1};
`

S.CreditContainer = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 50vw;
  height: 50px;
  color: white;
`