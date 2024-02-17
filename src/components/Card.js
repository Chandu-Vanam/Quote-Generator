import React, { useEffect, useState} from 'react';
import './Card.css';
import images from './images';

const Card = (props) => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);
    const myApi = '8FNb2A/2a3aHNY/gedpi5Q==zva6bhJmYLPMnmCJ';

    const selectedImage = images[props.category];

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${props.category}&X-Api-Key=${myApi}`);
                const result = await response.json();
                setQuote(result[0].quote);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [props.category]); // Fetch data whenever category changes

    return (
        <div>
            <div className="card">
                {/* <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/Amazing-Nature-Wallpaper.jpg' className="card-img-top" alt="file not found" /> */}
                <img src={selectedImage} className="card-img-top" alt="file not found" />

                <div className="card-body">
                    <h5 className="card-title"> {props.category} Quote</h5>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <p className="card-text">{quote}</p>
                    )}
                </div>
            </div>
        </div>
    );
};



export default Card;
