import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import PageEditor from "./pageEditor/pageEditor";
import Prompt from "./prompt/Prompt";
const S = {}
S.LoggedIn = styled.div`

`
const LoggedIn = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        user,
        journals,
        setJournalIndex,
        promptMsg,
        isPromptOpen,
        handlePrompt,
        handlePromptAction
    } = props

    return (
        <S.LoggedIn>
            {/* <PageEditor/> */}
            {isPromptOpen ? 
            <Prompt promptMsg={promptMsg} isPromptOpen={isPromptOpen} handlePromptAction={handlePromptAction}/>
                          :
            <></>
            }
            
            <DisplayJournals>
                {journals[0].map((title, index)=><Journal 
                    title={title} key={index} index={index} 
                    setJournalIndex={setJournalIndex} 
                    handlePrompt={handlePrompt}
                /> )}
            </DisplayJournals>
            
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user}/>
            
        </S.LoggedIn>
    )
}

export default LoggedIn