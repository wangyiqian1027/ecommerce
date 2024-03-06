import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Types = () => {
    const [categoryData, setCategoryData] = useState([]);

    const routeImg = "../src/assets";

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
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
                    <h2>Explore Our Collections <sup>(Total {categoryData.length})</sup></h2>
                    <p>
                        Dive into the world of handcrafted elegance. Discover unique
                        collections designed to suit every style.
                    </p>
                </div>
                <div className="container-content double">
                    {categoryData ? (
                        categoryData.map((category) => (
                            <div className="content-box" key={category.category_id}>
                                <img src={`${routeImg}/${category.img}`} alt={category.name} />
                                <div className="box-details">
                                    <h4>{category.name}</h4>
                                    <p>{category.description}</p>
                                    <Link to={`/category/${category.category_id}`}><button>Explore</button></Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>No categories available</h3>
                    )}
                </div>
            </div>
        </>
    );
};

export default Types;
