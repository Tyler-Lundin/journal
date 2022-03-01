import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.value)
  // CONSOLE_APP_INFO(1, 0)
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

const S = {}

S.App = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overscroll-behavior:none;
  background: rgb(200,200,200);
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
export function CONSOLE_APP_INFO (isOn, Section) { if(isOn){ switch (Section) {
case 0: // App.js
return console.log(
'JRNL by TYLER LUNDIN | 2022 \n\n',
`function App() {
  const user = useSelector(state => state.user.value)
  CONSOLE_APP_INFO(1, 1)
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
}`
)
case 1: // LOGGED IN
return console.log(
  'JRNL by TYLER LUNDIN | 2022 \n\n', 
  `const LoggedIn = () => {

    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const promptOpen = useSelector(state => state.prompt.value.isOpen)
    const isJournalOpen = useSelector(state => state.currentJournal.value.isJournalOpen)
    const user = useSelector(state => state.user.value)

    useEffect( async ()=>{
        if (user) {
             let list = await getJournals()
             dispatch(setJournalsList(list))
        }
       },[])

    return (
        <S.LoggedIn>
            {
                isJournalOpen? <PageEditor /> : <></>
            }
            {
                promptOpen? <Prompt/> : <></>
            }
            {
                isJournalOpen ? <></> :           
                <DisplayJournals>
                    {journalsList.journalTitles.map((title, index)=>
                        <Journal title={title} key={index} index={index} /> 
                    )}
                </DisplayJournals>
            }
            <Nav/>
        </S.LoggedIn>
    )
}`
)
case 2: // LOGGED OUT
return console.log(
  'JRNL by TYLER LUNDIN | 2022',
  `const LoggedOut = () => {
    const [counter, setCounter] = useState(0)
    const dispatch = useDispatch()
    function clearStateSignout () {
        dispatch(clrJournalsList())
        dispatch(clrPagesList())
        dispatch(clrCurrentJournal())
        dispatch(clrCurrentPage())
        setCounter(0)
    }
    useEffect(()=>{
    if (counter > 1) {
        clearStateSignout()
    }
    },[])
    return (
        <S.LoggedOut id="LoggedOut">
            <S.Logo id="LogInLogo" src={JournalLogo}/>
            <Login/>            
        </S.LoggedOut>
    )
}

export default LoggedOut`
)
case 3: // LOGGED OUT
return console.log(
  'JRNL by TYLER LUNDIN | 2022'
)
case 4: // LOGGED OUT
return console.log(
  'JRNL by TYLER LUNDIN | 2022'
)
case 5: // LOGGED OUT
return console.log(
  'JRNL by TYLER LUNDIN | 2022'
)
}}}