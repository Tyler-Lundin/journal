import { doc, updateDoc} from 'firebase/firestore'
import {db, auth} from './firebase'
async function SaveData (currentJournal, pages, pageIndex, contentUpdate, titleUpdate) {
    // const collectionRef = collection(db, userID)
    // const docSnap = await getDoc(docRef);
    if (contentUpdate == undefined && titleUpdate == undefined) {
        console.log('NO CHANGES MADE, NO NEED TO SAVE!')
    }
    else if(contentUpdate != undefined){
        const userID = auth.currentUser.uid
        const docRef = doc(db, userID, currentJournal[0]);
        const newTitles = pages[0]
        const newContent = pages[1]
        newTitles[pageIndex-1] = titleUpdate
        newContent[pageIndex-1] = contentUpdate
        
        if (titleUpdate == undefined) {
            await updateDoc(docRef, {
                pagesContent: newContent
            })
        }
        else {
            await updateDoc(docRef, {
                pagesContent: newContent,
                pageTitles: newTitles
            })
        }
    }

        // save as selected jrnl
        // console.log('titleUpdate:',titleUpdate)
        // console.log('contentUpdate',contentUpdate)
        // console.log('newContent:',newContent)
        // console.log('newTitles:',newTitles)
        // console.log('pages:', pages)
}

export default SaveData