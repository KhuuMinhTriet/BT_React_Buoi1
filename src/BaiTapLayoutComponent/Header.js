import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container px-lg-5'>
                <a className='navbar-brand'>Start Boostrap</a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle Nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='navContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link active' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header

