import Carousal from "../Components/CarousalBig";
import HealthConcern from "./HealthConcern";
import HomeProduct from "./HomeProduct";
import ProductCategoryName from "./ProductCategoryName";
import ShopByCategory from "./ShopByCategory";
import TopBrands from "./TopBrands";
import ImgCard from "./ImgCart";
import Navlow from "../Components/Navlow";
import Footer from "../Components/Footer"

export default function Home() {
    return (
        <div>
            <Navlow />
            <ProductCategoryName />
            <Carousal />
            <ImgCard />
            <ShopByCategory />
            <TopBrands />
            <HealthConcern />
            <HomeProduct />
            <Footer />
        </div>
    )
}