import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AUTH } from "./firebase";

export function userRegister(email, password) {
    return createUserWithEmailAndPassword(AUTH, email, password);
}

export function loginUser(email, password) {
    return signInWithEmailAndPassword(AUTH, email, password);
}

export function Logout() {
    return signOut(AUTH).then(() => {
        localStorage.removeItem("token"); 
    });
}
