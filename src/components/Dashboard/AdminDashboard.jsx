import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-7">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard 
