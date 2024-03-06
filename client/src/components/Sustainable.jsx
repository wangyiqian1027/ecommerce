import { Link } from "react-router-dom"

const Sustainable = () => {
    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content center">
                    <h2>Sustainable Luxury</h2>
                    <p>Join us in our commitment to sustainability and craftsmanship. Each accessory tells a story of conscious living, allowing you to embrace elegance with purpose. Our materials are sourced responsibly, and our production process prioritizes eco-friendly practices.</p>
                    <Link to={"/contact"}><button>Learn More</button></Link>
                </div>
            </div>
        </>
    )
}

export default Sustainable
