import React, { useState, useEffect } from "react"

import { auth } from "../Firebase/firebase"
const AuthContext = React.createContext()

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    
    function logout(){
        return auth.signOut()
    }

    function passwordReset(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])
   
    const value = {
        currentUser,
        signUp,
        login,
        logout,
        passwordReset
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }