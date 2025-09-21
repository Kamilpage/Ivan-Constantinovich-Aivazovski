import React from 'react';
import heroImage from '../assets/hero1.png';

const Hero = () => {
    return (
        <section className='hero'>

        <div className='container'>
            <div className='hero__inner'>

            <h1>Ivan Constantinovich Aivazovski</h1>
            <h2>Russian marine painter of Armenian origin, collector, philanthropist</h2>
            <img src={heroImage} alt="Ivan Constantinovich Aivazovski"/>
            </div>
        </div>
        </section>
    );
};

export default Hero;