import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);

    async function signIn(email,senha){
        console.log(email)
        console.log(senha)
    }

    return(
        <AuthContext.Provider 
            value={{
                signed: !!user,
                user,
                signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
