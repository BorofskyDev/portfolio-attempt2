import React from 'react';
import './styles/About.css'
import coding from '../images/coding.jpg'

const About = () => {
  return (
    <section className='about'>
        <h1 className='about-me'>About Me</h1>
        <div className='container-2'>
            <div className='image-cont'> 
                  <img src={coding} alt='screen with computer code' />
            </div>
            <div className='text-2'>
                <p>Soft Skills</p>
                <p>React</p>
                <p>Next</p>
                <p>HTML</p>
                <p>Other Shit</p>
                <p>Probably Deleting This Section</p>
                <p>Gonna make it look like coding</p>
            </div>
        </div>
        
    </section>

  );
};

export default About;
