import { useState } from "react"
import AccountIcon from "../assets/account.svg"
import BagIcon from "../assets/bag.svg"
import MenuIcon from "../assets/menu.svg"
import { Link } from "react-router-dom";

const Header = () => {
    const [stackVisible, setStackVisible] = useState(false)

    const toggleStack = () => {
        setStackVisible(!stackVisible)
    }

    return (
        <>
            <header className="dark">
                <nav className="landscape">
                    <ul>
                        <li><Link to={"/"} className="logo">EleganceCraft.</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link to={"/categories"}>Categories</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"/cart"}><img src={BagIcon} alt="dsa" /></Link></li>
                        <li><Link to={"/login"}><img src={AccountIcon} alt="dsa" /></Link></li>
                    </ul>
                </nav>
                <nav className="portrait">
                    <ul>
                        <li><Link to={"/"} className="logo">EleganceCraft</Link></li>
                        <li><Link onClick={toggleStack}><img src={MenuIcon} alt="dsa" /></Link></li>
                    </ul>
                    <ul className="stack" style={{ display: stackVisible ? "flex" : "none" }}>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link to={"/categories"}>Categories</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><Link to={"/cart"}><img src={BagIcon} alt="dsa" />Cart</Link></li>
                        <li><Link to={"/login"}><img src={AccountIcon} alt="dsa" />Account</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header
