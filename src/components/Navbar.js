import React from 'react'
import {Link} from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
  return (
    <div className='sum'>
        <div className='logo'>Escapism App</div>
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mylist'>My List</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
};

export default Navbar