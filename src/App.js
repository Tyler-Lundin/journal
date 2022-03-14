import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { auth } from './util/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { spin } from './util/animations';
import ImageCredit from './components/ImageCredit';
import {img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17} from './images/imageListInOrder'
import SelectedBackground from './components/SelectedBackground';
import { setBackground } from './app/settings/selectedBackgroundSlice';
import { toggle } from './app/settings/darkModeSlice';
import { setMultiplyer } from './app/settings/fontSizeSlice';
import getUserSettings from './util/getUserSettings';

function App() {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
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
    dispatch(setBackground(settings_.selectedBackground))
    dispatch(toggle(settings_.darkMode))
    dispatch(setMultiplyer(settings_.fontMultiplyer))
  }

  useEffect(()=>{
    if ( user ) {
      setSettingsOnLoad()
    }
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
        {/* <S.Dark darkMode={darkMode}/>
        <S.Light darkMode={darkMode}/> */}
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
// S.Dark = styled.div`
//   background: rgb(30,30,30);
//   background-image: url(${img0});
//   background-size: 100%;
//   transform-origin: center;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   position: absolute;
//   transition: 250ms;
//   opacity: ${props => props.darkMode ? .5 : 0};
// `

// S.Light = styled.div`
//   background: rgb(200,200,200);
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   position: absolute;
//   transition: 250ms;
//   opacity: ${props => props.darkMode ? 0 : 1};
// `

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