import {doc, getDoc} from 'firebase/firestore'
import {db, auth} from './firebase'

async function loadSelectedJournal (currentJournal, journals) {
    const uID = auth.currentUser.uid
    const jrnlID = journals[1][currentJournal]
    console.log(jrnlID)
    const docRef = await doc(db, uID, jrnlID.toString())
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        await handleSetCurrent(docSnap.data().jrnlTitle, docSnap.data().pages.content)
    }
}

export default loadSelectedJournal