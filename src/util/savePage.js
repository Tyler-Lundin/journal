import { doc, updateDoc} from 'firebase/firestore'
import {db, auth} from './firebase'

async function savePage (journal, title, content) {
    console.log(journal)

    const journalID = journal.currentID[0]


    const userID = auth.currentUser.uid
    const docRef = doc(db, userID, journalID);
    
    await updateDoc(docRef, {
        pagesContent: content,
        pageTitles: title
    })
 
}

export default savePage