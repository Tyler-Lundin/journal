import { doc, updateDoc} from 'firebase/firestore'
import {db, auth} from './firebase'
async function SaveData (currentJournal, pages, pageIndex, contentUpdate, titleUpdate) {

    const userID = auth.currentUser.uid
    const docRef = doc(db, userID, currentJournal[0]);
    const newTitles = pages[0]
    const newContent = pages[1]
    newTitles[pageIndex-1] = titleUpdate
    newContent[pageIndex-1] = contentUpdate
    if (contentUpdate == undefined && titleUpdate == undefined) {
        console.log('NO CHANGES MADE, NO NEED TO SAVE!')
    }
    else if(contentUpdate != undefined){
        if (titleUpdate == undefined) {
            console.log('SAVE JUST PAGE')
            await updateDoc(docRef, {
                pagesContent: newContent
            })
        }
        else{
            console.log('SAVE TITLE AND PAGE')
            await updateDoc(docRef, {
                pagesContent: newContent,
                pageTitles: newTitles
            })
        }
        console.log('END OF SAVE')
    }
    else if(titleUpdate != undefined && contentUpdate == undefined){
        await updateDoc(docRef, {
            pageTitles: newTitles
        })
    }
}

export default SaveData