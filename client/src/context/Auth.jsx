import React,{useState, createContext, useContext, useEffect} from 'react'

const AuthContext = createContext();



const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    user : null,
    token : ""
  });

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("auth"));
    if (parsedData) {
        setAuth({
            ...auth,
            user: parsedData.user,
            token: parsedData.token
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return (
    <>
      <AuthContext.Provider value={[auth, setAuth]}>
          {children}
      </AuthContext.Provider>
    </>
  )
}

// custom hook
const useAuth =() => useContext(AuthContext);
export {useAuth, AuthProvider}
