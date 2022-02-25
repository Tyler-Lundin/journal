import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from './firebase'

async function getPages (setPages, currentJournal, setCurrentPage) {
    const userID = auth.currentUser.uid
    console.log(currentJournal)
    let list = [[],[]]
    const docRef = doc(db, userID, currentJournal[0])
    const docSnapshot = await getDoc(docRef)
    const pageTitles = docSnapshot.data().pageTitles
    const pagesContent = docSnapshot.data().pagesContent
    pageTitles.map(page=>list[0].push(page))
    pagesContent.map(page=>list[1].push(page))
    const lastPage = [list[0][list[0].length-1],list[1][list[0].length-1]]
    console.log('LAST PAGE: ', lastPage)
    console.log(list)
    setPages(list)
    // setCurrentPage(lastPage)
}


export default getPages