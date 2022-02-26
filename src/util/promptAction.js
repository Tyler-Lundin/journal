
function promptAction (target, promptChoice, setIsPromptOpen, currentJournal, handleSetCurrent, setIsJournalOpen, handleGetPages) {
    console.log('start prompt action')
    const handleJournal = () => {
        handleSetCurrent()
        setIsPromptOpen(false)
    }
    const handleCloseUnsavedPage = () => {
        setIsJournalOpen(false)
        setIsPromptOpen(false)
    }
    if(!promptChoice)setIsPromptOpen(false)
    else {
        
        switch(target){
            case 'journal' : 
                handleJournal()
                break;
            case 'page' : 
                handleCloseUnsavedPage()
                break;
            default :
                return null
        }
    }
    console.log('end prompt action')

}



export default promptAction