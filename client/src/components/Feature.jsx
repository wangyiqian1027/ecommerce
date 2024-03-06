import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const Feature = () => {
    const [featureProduct, setFeatureProduct] = useState(null);
    const routeImg = "../src/assets";

    useEffect(() => {
        axios.get('http://localhost:3001/feature')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setFeatureProduct(response.data[0]);
                } else {
                    console.log('No feature data');
                }
            })
            .catch(error => {
                console.error('Error fetching feature:', error);
            });
    }, []);

    return (
        <div className="wrapper-container dark">
            <div className="container-content double">
                {featureProduct ? (
                    <>
                        <div className="content-details">
                            <h2>{featureProduct.name}</h2>
                            <p>{featureProduct.description}</p>
                            <Link to={"/shop"}><button>Shop Now</button></Link>
                        </div>
                        <div className="content-image">
                            <img src={`${routeImg}/${featureProduct.img}`} alt={featureProduct.name} />
                        </div>
                    </>
                ) : (
                    <h3>No feature available</h3>
                )}
            </div>
        </div>
    );
}

export default Feature;
