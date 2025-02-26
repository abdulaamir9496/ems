import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/localStorage"

//Creating context
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  // const data = getLocalStorage()
  // console.log(data)
  // console.log(data.employees)
  //instead we can write this:
  // setUserData(getLocalStorage())

  //Let's separate Admin and employee's data.
  useEffect(() => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }, [])
  



  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
