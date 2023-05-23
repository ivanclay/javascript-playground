import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../services/firebaseConnection';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser(){
            const storageUser = localStorage.getItem('@userData');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadUser();
    },[]);

    async function logout(){
        await signOut(auth);
        localStorage.removeItem('@userData');
        setUser(null);
        toast.success('Logout feito com sucesso!');
    }

    async function signIn(email,senha){
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, senha)
                .then(async (value) => {
                    let uid = value.user.uid;
                    const docRef = doc(db, 'users', uid);
                    const docSnap = await getDoc(docRef);

                    let userData = {
                        uid: uid,
                        nome: docSnap.data().nome,
                        email: value.user.email,
                        avatarUrl: docSnap.data().avatarUrl
                    }

                    setUser(userData);
                        storageUser(userData);
                        setLoadingAuth(false);
                        toast.success(` ${userData.nome } bem vindo de volta`);
                        navigate('/dashboard', { replace: true })

                })
                .catch((error) => {
                    setLoadingAuth(false);
                    toast.error(`Algo deu errado \r ${error}`);
                });
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
                logout,
                loadingAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
