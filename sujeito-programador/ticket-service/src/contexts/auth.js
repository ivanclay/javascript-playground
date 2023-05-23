import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const navigate = useNavigate();

    async function signIn(email,senha){
        console.log(email)
        console.log(senha)
    }

    async function signUp(email,senha, nome){
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, senha)
                .then( async (value) => {
                    let uid = value.user.uid;

                    await setDoc(doc(db, 'users', uid), {
                        nome: nome,
                        avatarUrl: null,
                    }).then(() => {
                       
                        let userData = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            avatarUrl: null
                        }

                        setUser(userData);
                        storageUser(userData);
                        setLoadingAuth(false);
                        toast.success(` ${userData.nome } Seja bem vindo ao sistema`);
                        navigate('/dashboard', { replace: true })

                    });
                })
                .catch((error) => {
                    console.log(error);
                    setLoadingAuth(false);
                });
    }

    function storageUser(userData){
        localStorage.setItem('@userData', JSON.stringify(userData));
    }

    return(
        <AuthContext.Provider 
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                loadingAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
