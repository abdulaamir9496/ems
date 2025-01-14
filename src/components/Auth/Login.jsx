import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Two way binding
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`Email is ${email}`);
        // console.log(`Password is ${password}`);

        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }} 
                className="flex flex-col items-center justify-center">
                    <input 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your email" required />
                    <input 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-5 placeholder:text-gray-400" type="password" placeholder="Enter password" required />
                    <button className="text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5 placeholder:text-white" >Login</button>
                </form>
            </div>        
        </div>
    )
}

export default Login
