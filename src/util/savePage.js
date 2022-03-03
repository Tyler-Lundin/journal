import { doc, updateDoc} from 'firebase/firestore'
import {db} from './firebase'

async function savePage (email, journal, title, content) {
    const journalID = journal.currentID[0]
    const docRef = doc(db, email, journalID);
    
    await updateDoc(docRef, {
        pageTitles: title,
        pagesContent: content
    })
 
}

export default savePage