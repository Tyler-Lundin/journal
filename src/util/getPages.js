import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

async function getPages (journalID) {
    console.log('START OF GET PAGES')
    console.log('journalID', journalID)
    
    let list = {
        pageTitles: [],
        pageContent: []
    }
    const docRef = doc(db, auth.currentUser.email, journalID[0])
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