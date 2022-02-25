import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import Prompt from "./prompt/Prompt";
const S = {}
S.LoggedIn = styled.div`

`
const LoggedIn = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        user,
        setJournalIndex,
        promptMsg,
        isPromptOpen,
        handlePrompt,
        handlePromptAction
    } = props

    const JournalList = ['Title00', 'Title01', 'Title02', 'Title03', 'Title04', 'Title05']

    return (
        <S.LoggedIn>
            <Prompt promptMsg={promptMsg} isPromptOpen={isPromptOpen} handlePromptAction={handlePromptAction}/>
            <DisplayJournals>
                {JournalList.map((title, index)=><Journal 
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