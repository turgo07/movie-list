import React from 'react';
import { Link } from 'react-router-dom';
import Buscar from './Buscar';

const Navbar: React.FC = () => {
    return (
        <>
            <nav id='nav'>
                <ul className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <Buscar />
            </nav>
            <div id='movies'></div>
        </>
    );
};

export default Navbar;