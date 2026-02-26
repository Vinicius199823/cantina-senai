import React, {createContext, useState, ReactNode} from "react";

interface AuthContextData {
    isLogged: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {

    const [isLogged, setIsLogged] = useState(false);

    function login(){
        setIsLogged(true);
    }

    function logout(){
        setIsLogged(false);
    }

    return(
        <AuthContext.Provider
            value={{isLogged, login, logout}}
        >
            {children}
        </AuthContext.Provider>
    );
}