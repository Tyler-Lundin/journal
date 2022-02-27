import styled from "styled-components";
import DisplayJournals from "./journal/DisplayJournals";
import Journal from "./journal/Journal";
import Nav from "./nav/Nav";
import PageEditor from "./pageEditor/pageEditor";
import Prompt from "./prompt/Prompt";
import { useState } from "react";
const S = {}
S.LoggedIn = styled.div`

`
const LoggedIn = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        user,
        setUser,
        journals,
        journalIndex,
        setJournalIndex,
        promptMsg,
        isPromptOpen,
        handlePrompt,
        handlePromptAction,
        pageIndex,
        pages,
        totalPages,
        currentPage,
        isJournalOpen,
        handleGetPages,
        setCurrentPage,
        currentJournal,
        handleOpenJournals,
        setUnsavedChanges,
        setPageIndex
    } = props
    
    
    return (
        <S.LoggedIn>
            {
                isJournalOpen?
                <PageEditor 
                    pageIndex={pageIndex} 
                    pages={pages}
                    totalPages={totalPages} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                    journalIndex={journalIndex}
                    currentJournal={currentJournal}
                    setUnsavedChanges={setUnsavedChanges}
                    setPageIndex={setPageIndex}
                />
                :
                <></>
            }
            {isPromptOpen? 
            <Prompt promptMsg={promptMsg} isPromptOpen={isPromptOpen} handlePromptAction={handlePromptAction} handleGetPages={handleGetPages}/>
            :
            <></>
            }
            {
                isJournalOpen?
                <></>
                :
                            
                <DisplayJournals>
                    {journals[0].map((title, index)=><Journal 
                        title={title} key={index} index={index} 
                        setJournalIndex={setJournalIndex} 
                        handlePrompt={handlePrompt}
                        /> )}
                </DisplayJournals>
                
            }
            <Nav setUser={setUser} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user} handleOpenJournals={handleOpenJournals}/>
            
        </S.LoggedIn>
    )
}

export default LoggedIn