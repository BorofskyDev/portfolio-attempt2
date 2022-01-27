import React from 'react';
import './styles/Section.css';
import astro from '../images/astro4.jpg'

const Section = () => {
  return (
    <section className='main-section'>
        <div className='container'>
            <div className='texts'>
                <h1>It's about the</h1>
                <h1 className='h1-big'>Web Experience</h1>
                <p>Front-End Developer who also has over a decade of experience in customer service, sales, and client management</p>
                <button className='text-button'>My Work</button>
            </div>
            <div className='image'>
                <img src={astro} alt='meditating astronaught' />
            </div>
        </div>
    </section>
    )
};

export default Section;

