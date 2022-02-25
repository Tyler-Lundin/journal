import { getDocs, collection } from 'firebase/firestore'
import {db, auth} from './firebase'

async function getJournals (journals, setJournals) {
    console.log('START GET JOURNALS')
    const userID = auth.currentUser.uid
    const collRef = collection(db, userID);
    const querySnapshot = await getDocs(collRef);
    let list = journals
    if (list.length > 0) { list = [[],[]] }
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      list[0].push([doc.data().title])
      list[1].push([doc.id])
    });
    setJournals(list)
}
    



export default getJournals