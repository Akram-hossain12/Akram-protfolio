import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    const createUser = (email,password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser=()=>{
      setLoading(true)
      return signOut(auth)
    }
    const updateUser = (userInfo)=>{
      setLoading(true)
      return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
              setUser(currentUser)
           }) 
           return ()=> unsubscribe()
  
    },[])

    const authInfo ={user,loading,updateUser, createUser,LoginUser,logOutUser}
    return (
        <AuthContext.Provider value={authInfo}>

        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;