import { getAuth, onAuthStateChanged } from "firebase/auth";

function Set_User_Auth (setUserID, setUser) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        setUser(user)
        setUserID(uid)
    } else {
        console.log('failed to set user auth / user id')
    }
    });
}