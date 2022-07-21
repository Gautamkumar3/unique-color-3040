import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../LogIn/Login"
import Signup from "../Signup/Signup"
import Signin from "../Signup/Signin"
import PrivateRoute from "../Components/PrivateRoute"

const Allroute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<PrivateRoute><Signup /></PrivateRoute>} />
            <Route path="/signin" element={<PrivateRoute><Signin /></PrivateRoute>} />
        </Routes>

    )
}

export default Allroute
