import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from './firebase'

async function getPages (journalPath, setPages) {
    console.log('START OF GET PAGES')
    const userID = auth.currentUser.uid
    let list = [[],[]]
    const docRef = doc(db, userID, journalPath[0])
    const docSnapshot = await getDoc(docRef)
    const pageTitles = docSnapshot.data().pageTitles
    const pagesContent = docSnapshot.data().pagesContent
    pageTitles.map(page=>list[0].push(page))
    pagesContent.map(page=>list[1].push(page))
    const pagetotal = list[0].length
    setPages(list)
    console.log(list)
    console.log('END OF GET PAGES')
}


export default getPages