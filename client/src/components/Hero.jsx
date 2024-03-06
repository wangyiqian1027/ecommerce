import { Link } from "react-router-dom"
import HeroImage from "../assets/hero.jpg"

const Hero = () => {
    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content">
                    <h1>Welcome to Leverging of Craftings.</h1>
                    <p>Explore our exquisite collections and find the perfect piece to add a touch of elegance to your style.</p>
                    <Link to={"/shop"}><button>Shop Now</button></Link>
                </div>
                <div className="container-image">
                    <img src={HeroImage} alt="Hero" />
                </div>
            </div>
        </>
    )
}

export default Hero
