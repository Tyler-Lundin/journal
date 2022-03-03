import { addDoc, collection } from 'firebase/firestore'
import {auth, db} from './firebase'

async function createJournal (JournalTitle) {
    console.log('CREATED JOURNAL ' + JournalTitle)
    const collRef = collection(db, auth.currentUser.email);
    await addDoc(collRef, {
        pageTitles: ['TITLE (click to edit)'],
        pagesContent: [`This is the first page in your new Journal '${JournalTitle}'`],
        title: JournalTitle
    })
}
    



export default createJournal