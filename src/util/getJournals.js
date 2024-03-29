import { getDocs, collection } from 'firebase/firestore'
import {auth, db} from './firebase'

async function getJournals () {
    const collRef = collection(db, auth.currentUser.email);
    const querySnapshot = await getDocs(collRef);
    let list = {
      journalTitles: [],
      journalIDs: []
    }
    querySnapshot.forEach((doc) => {
      console.log(doc)
      console.log(doc.data())
      if (doc.id !== 'user-settings'){
        list.journalTitles.push([doc.data().title])
        list.journalIDs.push([doc.id])
      }

    });
    return list
}
    



export default getJournals