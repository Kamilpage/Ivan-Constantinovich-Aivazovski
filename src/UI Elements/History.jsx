import React from 'react';
import portrait1 from '../assets/portrait1.jpg';
import '../style/main.css'

const History = () => {
    return (
        <section className='history'>
            <div className='container'>
                <div className='history--inner'>

                <h1 className='passage-head'>History</h1>
                <img className='pad-30' src={portrait1} alt="portrait 1"/>
                <p>Дом в котором родился Айвазовский | The house where Aivazovsky was born </p>
                </div>
            </div>
        </section>
    );
};

export default History;