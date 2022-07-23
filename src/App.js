
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Login from "./LogIn/Login";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Allroute from "./Routes/Allroute";
import Signin from "./Signup/Signin";
import Navlow from "./Components/Navlow";
import ProductPage from "./Product/ProductPage";
import "./Styles/Style.css"
import CartCard from "./CartPage/CartCard";
import Cart from "./CartPage/Cart";


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Allroute /> */}
      <CartCard />
      <Cart />
    </div>
  );
}

export default App;
