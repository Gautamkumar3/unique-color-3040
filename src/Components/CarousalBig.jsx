import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Style.css"

export default function Carousal() {
    return (
        <div style={{ marginTop: "10px" }}>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1657031386_Web_Homesafsdf.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656600206_Home_Bannersgge.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}