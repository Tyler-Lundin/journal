import {doc, getDoc} from 'firebase/firestore'
import {db, auth} from './firebase'

async function loadSelectedJournal (jrnlID) {
    const uID = auth.currentUser.uid
    const docRef = await doc(db, uID, jrnlID.toString())
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        return docSnap.data()
    }
}

export default loadSelectedJournal