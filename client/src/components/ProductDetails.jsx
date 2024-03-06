import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const ProductDetails = () => {
    const { product_id } = useParams();
    const [productData, setProductData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const routeImg = "../src/assets";
    // const history = useHistory();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/products?product_id=${product_id}`)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [product_id]);

    const handleCart = async (e) => {
        e.preventDefault();
        try {
            var user_id = parseInt(localStorage.getItem("userid"));
            const response = await axios.post("http://localhost:3001/cart", {
                product_id: productData[0].product_id,
                quantity: quantity,
                user_id: user_id
            });
            console.log(response.data);
            navigate("/cart/${productData[0].product_id}");
            // history.push(`/cart/${productData[0].product_id}`);
        } catch (error) {
            console.error("Cart error:", error);
        }
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= productData[0].stock_quantity) {
            setQuantity(value);
        }
    };

    return (
        <>
            <div className="wrapper-container light">
                {productData.length > 0 ? (
                    <>
                        <div className="container-content">
                            <h2>{productData[0].name} <sup>({productData[0].stock_quantity} left)</sup></h2>
                            <h3>${productData[0].price}</h3>
                            <p>{productData[0].description}</p>

                            <form onSubmit={handleCart}>
                                <input type="number" name="quantity" id="quantity" placeholder="Quantity" value={quantity} onChange={handleQuantityChange} />
                                <button type="submit">Buy Now</button>
                            </form>

                            {/* <Link to={`/cart/${productData[0].product_id}`}><button>Add to Cart</button></Link> */}
                            <button onClick={handleCart}>Add to Cart</button>
                        </div>
                        <div className="container-image">
                            <img src={`${routeImg}/${productData[0].img}`} alt={productData[0].name} />
                        </div>
                    </>
                ) : (
                    <div className="container-content">
                        <h3>No product available</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails;
