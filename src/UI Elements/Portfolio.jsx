import React from 'react';
import {useState} from "react";
import '../style/main.css'
import portrait2 from '../assets/portrait2.jpg';
import portrait3 from '../assets/portrait3.jpg';
import portrait4 from '../assets/portrait4.jpg';


const Portfolio = () => {
    const [items] = useState([
        {img:portrait2 , description:'Зимний обоз в пути, 1857 г. | Winter wagon train on the way, 1857'},
        {img:portrait3 , description:'Радуга, 1873 г. | Rainbow, 1873'},
        {img:portrait4 , description:'Неаполитанский залив утром, 1893 г. | Gulf of Naples in the morning, 1893'},

    ]);
    return (
        <section className='portfolio'>
            <div className='container'>
                <div className='portfolio-inner'>
                <h1 className='passage-head'>Portfolio</h1>
                {items.map((item, index) => (<div key={index} className='portfolio-item'>
                    <img src={item.img} alt={item.description}/>
                    <p>{item.description}</p>
                </div>))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;