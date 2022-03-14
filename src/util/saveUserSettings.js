import { doc, setDoc } from 'firebase/firestore'
import {auth, db} from './firebase'

async function saveUserSettings (darkMode, fontSize, selectedBackground) {
    const docRef = doc(db, auth.currentUser.email, 'user-settings');

    await setDoc(docRef, {
        darkMode: darkMode,
        fontMultiplyer: fontSize,
        selectedBackground: selectedBackground
    })
    
 
}

export default saveUserSettings