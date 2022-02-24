import { doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

async function getPages (userID, pages, setPages, currentJournal) {

    let list = pages
    if (list.length > 0) list = []
    const docRef = doc(db, userID, currentJournal[1])
    const docSnapshot = await getDoc(docRef)
    const pagesData = docSnapshot.data().pages
    pagesData.map(page=>{
      list.push(page)
    })
    setPages(list)

}


export default getPages