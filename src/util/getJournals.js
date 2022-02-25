import { getDocs, collection } from 'firebase/firestore'
import {db} from './firebase'

async function getJournals (userID, journals, setJournals) {
    let list = journals
    if (list.length > 0) {
      list = [[],[]]
    }
    const collRef = collection(db, userID);
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      list[0].push([doc.data().jrnlTitle])
      list[1].push([doc.id])
    });
    setJournals(list)
}


export default getJournals