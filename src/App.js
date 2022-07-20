import Carousal from "./Components/CarousalBig";
import ImgCart from "./Home/ImgCart";
import Navbar from "./Components/Navbar";
import ShopByCategory from "./Home/ShopByCategory";
import TopBrands from "./Home/TopBrands";
import HealthConcern from "./Home/HealthConcern";
import HomeProduct from "./Home/HomeProduct";
import ProductCategoryName from "./Home/ProductCategoryName";
import Footer from "./Components/Footer";
import Login from "./LogIn/Login";
// import "./Styles/style.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCategoryName />
      <Carousal />
      <ImgCart />
      <ShopByCategory />
      <TopBrands />
      <HealthConcern />
      <HomeProduct />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
