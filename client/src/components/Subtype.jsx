import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Subtype = () => {
    const { category_id } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    const routeImg = "../src/assets";

    useEffect(() => {
        axios.get(`http://localhost:3001/products?category_id=${category_id}`)
            .then(response => {
                setCategoryData(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <>
            <div className="wrapper-container light">
                <div className="container-content">
                    <h2>{categoryData.length > 0 ? categoryData[0].category_name : ''} <sup>(Total {categoryData.length})</sup></h2>
                    <p>
                        Explore our complete range of handcrafted accessories. Each piece is
                        a work of art, designed to elevate your style with elegance and
                        grace.
                    </p>
                </div>
                <div className="container-content triple">
                    {categoryData ? (
                        categoryData.map((category) => (
                            <div className="content-box" key={category.product_id}>
                                <img src={`${routeImg}/${category.img}`} alt={category.name} />
                                <div className="box-details">
                                    <h4>{category.name}</h4>
                                    <p>{category.price}</p>
                                    <div className="single">
                                        <Link to={`/product/${category.product_id}`} className="center"><button className="width">Explore</button></Link>
                                        <Link to={`/cart/${category.product_id}`} className="center">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>No products available</h3>
                    )}
                </div>
            </div>
        </>
    );
};

export default Subtype
