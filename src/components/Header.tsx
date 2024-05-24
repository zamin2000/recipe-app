"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="light">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    aria-controls="navbarToggler"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link href="/" className="navbar-brand">My Recipes App</Link>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={"/recipes"} className="nav-link" aria-current="page">My Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/recipes/favourites"} className="nav-link">Favourites</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/signin" className="btn btn-dark " type="button">Log In</Link>
            </div>
        </nav>
    );
};

export default Header;
