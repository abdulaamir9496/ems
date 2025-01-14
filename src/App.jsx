import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"

const App = () => {

  const [user, setUser] = useState(null);

  //Handle login checks if email and password are valid before sending email 
  // to the server and updating the password field with the new password field 
  // when the user is logged in and the password field is updated accordingly.
  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == '123') {
      // console.log('This is Admin')
      setUser('admin')
      console.log('admin');
    } else if(email == 'employee1@example.com' && password == '123') {
      // console.log('This is User')
      setUser('employee')
      console.log('employee')
    } else {
      alert('Invalid Credentials')
    }
  }

  handleLogin('admin@exmaple.com', 123);

  // useEffect(() => {
  //   // setLocalStorage()   //For setting the data
  //   // getLocalStorage()     //For getting the
  // },)

  return (
    <>
      {/* <Login /> */}

      {/* If it's not a user then Login, if it's a user then leave empty. */}
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
