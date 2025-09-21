import React from 'react';
import '../style/main.css'
import icon1 from '../assets/youtube.svg';
import icon2 from '../assets/instagram.svg';
import icon3 from '../assets/linkedIn.svg';
import icon4 from '../assets/facebook.svg';


const Contacts = () => {
    return (
        <section className='contacts'>
            <div className='container'>
                <div className="contacts__inner">
                    <h1 className='passage-head'>Contacts</h1>
                    <div className="contacts__list">
                        <a href="">ayvazovskiy.su</a>
                        <div className='contact-media'>
                            <img src={icon1} alt="youtube"/>
                            <img src={icon2} alt="instagram"/>
                            <img src={icon3} alt="linkedIn"/>
                            <img src={icon4} alt="facebook"/>
                        </div>
                        <h3>More works you can see in these <br/> social networks</h3>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contacts;