import { doc, updateDoc} from 'firebase/firestore'
import {db, auth} from './firebase'

async function savePage (journal, title, content) {
    const journalID = journal.currentID[0]
    const userID = auth.currentUser.uid
    const docRef = doc(db, userID, journalID);
    
    await updateDoc(docRef, {
        pageTitles: title,
        pagesContent: content
    })
 
}

export default savePage