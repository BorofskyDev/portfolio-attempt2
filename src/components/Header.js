import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Data } from './Data';
import './styles/Header.css'

export const Header = () => {
    const [open, setOpen] = useState(false)

    const showMenu = () => (
        setOpen(!open)
    )

  return (
  <div className='header'>
      <nav>
          <div className='logo'>
              <h1>Joel Borofsky</h1>
          </div>
          <ul className='ul-items'>
            <li>
                <NavLink to='#'>Home</NavLink>
            </li>
            <li>
                <NavLink to='#about'>About</NavLink>
            </li>
            <li>
                <NavLink to='#services'>Services</NavLink>
            </li>
            <li>
                <NavLink to='#projects'>Projects</NavLink>
            </li>
            <li>
                <NavLink to='#'>Blog</NavLink>
            </li>
            <li>
                <NavLink to='#contact'>Contact</NavLink>
            </li>
                <div className='hamburger-menu'>
                    <MenuOutlined className='menu' onClick={showMenu}/>
                </div>
          </ul>
      </nav>
      <nav className={open ? 'slider active' : 'slider'}>
          <ul className='slider-ul' onClick={showMenu}>
              {Data.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                        <NavLink to={item.path}>{item.text}</NavLink>
                    </li>
                )
              })}
          </ul>

      </nav>
  </div>
  );
};


