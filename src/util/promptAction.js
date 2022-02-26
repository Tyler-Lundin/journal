
function promptAction (target, promptChoice, setIsPromptOpen, currentJournal, handleSetCurrent, handleGetPages) {
    console.log('start prompt action')
    const handleJournal = () => {
        handleSetCurrent()
        setIsPromptOpen(false)
    }
    if(!promptChoice)setIsPromptOpen(false)
    else {
        
        switch(target){
            case 'journal' : 
                handleJournal()
                break;
            case 'page' : // not sure yet
            default :
                return null
        }
    }
    console.log('end prompt action')

}



export default promptAction