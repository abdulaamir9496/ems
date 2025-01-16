import { createContext } from "react"

//Creating context
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={"Aamir"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
