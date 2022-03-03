import {doc, getDoc} from 'firebase/firestore'
import {db} from './firebase'

async function loadSelectedJournal (email, jrnlID) {
    const docRef = await doc(db, email, jrnlID.toString())
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        return docSnap.data()
    }
}

export default loadSelectedJournal