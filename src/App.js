import { app, auth, provider, db } from './util'; 
import { useState } from 'react';
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
  const handleLogin = () => Login(setUser, setUserID)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <S.App>
        {user ? 
          <LoggedIn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user}/> 
          : 
          <LoggedOut handleLogin={handleLogin}/>
        }
      </S.App>
    </>
  );
}

export default App;
