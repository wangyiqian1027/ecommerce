import { Link } from "react-router-dom"
import MetaIcon from "../assets/account.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"

const Footer = () => {
    return (
        <>
            <footer className="dark">
                <nav>
                    <ul>
                        <li><Link to={"/"} className="logo">EleganceCraft.</Link></li>
                    </ul>
                    <ul>
                        <li><Link href="#">Terms and Conditions</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Return Policy</Link></li>
                        <li><Link href="#">Accessibility</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer"><img src={MetaIcon} alt="Metaverse" />Meta</Link></li>
                        <li><Link to={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" />Instagram</Link></li>
                        <li><Link to={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter" />Twitter</Link></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer
