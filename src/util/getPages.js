import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from './firebase'

async function getPages (journalID) {
    console.log('START OF GET PAGES')
    console.log('journalID', journalID)
    const userID = auth.currentUser.uid
    let list = {
        pageTitles: [],
        pageContent: []
    }
    const docRef = doc(db, userID, journalID[0])
    const docSnapshot = await getDoc(docRef)
    console.log('JOURNALID',journalID[0])
    console.log('DOCSNAPSHOT', docSnapshot.data())
    const pageTitles = docSnapshot.data().pageTitles
    const pagesContent = docSnapshot.data().pagesContent
    pageTitles.map(page=>list.pageTitles.push(page))
    pagesContent.map(page=>list.pageContent.push(page))
    return list
}


export default getPages