import { auth, provider } from './../util/firebase'
import { signInWithPopup } from "firebase/auth";

async function Login (setUser, setUserID) {
    signInWithPopup(auth, provider)
    .then((result) => {
        setUser(result.user) 
        setUserID(auth.currentUser.uid)
    })
    .catch((error) => console.log(error))
}

export default Login

