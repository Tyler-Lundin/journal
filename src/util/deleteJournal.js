import { doc, deleteDoc } from 'firebase/firestore'
import {auth, db} from './firebase'

async function deleteJournal (journalID) {
    const docRef = doc(db, auth.currentUser.email, journalID[0])
    await deleteDoc(docRef)
}
    



export default deleteJournal