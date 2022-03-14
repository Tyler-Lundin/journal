import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

async function getUserSettings () {
    console.log('loading user settings')
    const docRef = doc(db, auth.currentUser.email, 'user-settings')
    const docSnapshot = await getDoc(docRef)
    const userSettings = docSnapshot.data()
    console.log(userSettings)
    return userSettings
}


export default getUserSettings