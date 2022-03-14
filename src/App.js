import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { auth } from './util/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import ImageCredit from './components/ImageCredit';
import SelectedBackground from './components/SelectedBackground';
import { setBackground } from './app/settings/selectedBackgroundSlice';
import { toggle } from './app/settings/darkModeSlice';
import { setMultiplyer } from './app/settings/fontSizeSlice';
import getUserSettings from './util/getUserSettings';

function App() {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const darkMode = useSelector(state=>state.darkMode.value)
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

  const setSettingsOnLoad = async () => {
    const settings_ = await getUserSettings()
    console.log(settings_.selectedBackground)
    console.log(settings_.darkMode)
    console.log(settings_.fontMultiplyer)
    dispatch(setBackground(settings_.selectedBackground))
    dispatch(toggle(settings_.darkMode))
    dispatch(setMultiplyer(settings_.fontMultiplyer))
  }

  useEffect(()=>{
    setSettingsOnLoad()
  },[user])

  return (
    <>
      <S.App >
        <Routes>
          <Route path="/" element={ user ? <LoggedIn/> : <LoggedOut />}/>
        </Routes>
        <S.CreditContainer>
          <ImageCredit/>
        </S.CreditContainer>
        <SelectedBackground/>
        <S.DarkModeFilter darkMode={darkMode}/>
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
S.DarkModeFilter = styled.div`
  background: ${props=> props.darkMode ? 'rgba(30,30,30,0.5)' : 'rgba(200,200,200,0.2)'};
  background-size: 100%;
  transform-origin: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  transition: 250ms;
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
      color: red;
    }
    
  }
`