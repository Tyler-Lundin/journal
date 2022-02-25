
function promptAction (target, promptChoice, setIsPromptOpen, currentJournal, handleSetCurrent) {

    const handleJournal = () => {
        handleSetCurrent()
        console.log('handling!')
        setIsPromptOpen(false)
        
    }
    if(!promptChoice)setIsPromptOpen(false)
    else {
        switch(target){
            case 'journal' : handleJournal()
            break;
            case 'page' : // not sure yet
            default :
                return null
        }
    }
}



export default promptAction