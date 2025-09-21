import React from 'react';
import '../style/main.css'

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='about__inner'>
                    <h1 className='passage-head'>About</h1>
                    <div className='about__text'>
                        <p>Ива́н Константи́нович Айвазо́вский – русский живописец-маринист армянского происхождения,
                            коллекционер, меценат.</p>
                        <p>Будучи художником с мировой известностью, Иван Константинович Айвазовский предпочитал жить и
                            работать на своей родине — в Крыму. Айвазовский наиболее известен своими морскими пейзажами,
                            которые составляют больше половины его работ. Художник считается одним из величайших
                            маринистов всех времён.</p>
                        <hr/>
                        <p>Ivan Konstantinovich Aivazovsky - Russian marine painter of Armenian origin, collector,
                            philanthropist.</p>
                        <p>Being a world famous artist, Ivan Konstantinovich Aivazovsky preferred to live and work in
                            his homeland - in the Crimea. Aivazovsky is best known for his seascapes, which make up more
                            than half of his work. The artist is considered one of the greatest marine painters of all
                            time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;