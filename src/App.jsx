import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
// import { getLocalStorage,   } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);

    //using AuthProvider context 
    const authData = useContext(AuthContext)   //If authData is available this will be called.
    // console.log(authData.employees)

    //To known who is logged in ?
    // useEffect(() => {   
    //   if(authData) {
    //     const loggedInUser = localStorage.getItem("loggedInUser")
    //     if(loggedInUser) {
    //       setUser(loggedInUser.role)
    //     }
    //   }
    // }, [authData]);

  //Handle login checks if email and password are valid before sending email 
  // to the server and updating the password field with the new password field 
  // when the user is logged in and the password field is updated accordingly.
  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == '123') {
      // console.log('This is Admin')
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      // console.log(user);
    // } else if(email == 'employee1@example.com' && password == '123') {
      } else if(authData && authData.employees.find((e) => email == e.email && e.password == password)) {     //find the email, password as provided else return Invalid Credentials
      // console.log('This is User')
      setUser('employee')
      // console.log(user)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    } else {
      alert('Invalid Credentials')
    } 
  }

  // handleLogin('admin@exmaple.com', 123);

  // useEffect(() => {
  //   // setLocalStorage()   //For setting the data
  //   // getLocalStorage()     //For getting the
  // },)

  return (
    <>
      {/* <Login /> */}

      {/* If it's not a user then Login, if it's a user then leave empty. */}
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {/* If user value is admin open admin dashboard, if user value is employee open employee dashboard */}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
