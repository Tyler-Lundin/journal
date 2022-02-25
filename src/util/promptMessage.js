
function promptMessage (target, promptChoice, setIsPromptOpen, currentJournal) {


    if(!promptChoice)setIsPromptOpen(false)
    else {
        switch(target){
            case 'journal' : // load journal
            case 'page' : // not sure yet
            default :
                return null
        }
    }
}



export default promptMessage