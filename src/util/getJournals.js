import { getDocs, collection } from 'firebase/firestore'
import {db, auth} from './firebase'

async function getJournals (dispatch, action) {
    console.log('start get journals')
    const userID = auth.currentUser.uid
    const collRef = collection(db, userID);
    const querySnapshot = await getDocs(collRef);
    let list = {
      journalTitles: [],
      journalIDs: []
    }
    querySnapshot.forEach((doc) => {
      list.journalTitles.push([doc.data().title])
      list.journalIDs.push([doc.id])
    });
    return list
}
    



export default getJournals