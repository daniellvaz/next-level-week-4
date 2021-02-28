import { 
  createContext, 
  ReactNode, 
  useContext, 
  useEffect, 
  useState 
} from "react";
import router from 'next/router'


interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface ContextProviderPrors {
  children: ReactNode;
}


export const AuthnContext = createContext({} as AuthContextData);


function redirect() {
  setTimeout(() =>{
    router.push('/');
  }, 1000)
}


export function AuthProvider({children}: ContextProviderPrors) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <AuthnContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthnContext.Provider>
  )
}