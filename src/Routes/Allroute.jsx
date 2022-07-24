import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Login from "../LogIn/Login"
import Signup from "../Signup/Signup"
import Signin from "../Signup/Signin"
import PrivateRoute from "../Components/PrivateRoute"
import ProductPage from "../Product/ProductPage"
import Cart from "../CartPage/Cart"
import AddressSlider from "../Address/AddressSlider"

const Allroute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/address" element={<AddressSlider />} />

        </Routes>

    )
}

export default Allroute
