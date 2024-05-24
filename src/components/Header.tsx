"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="light">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link href="/" className="navbar-brand">My Recipes App</Link>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={"/"} className="nav-link" aria-current="page">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/new-recipe"} className="nav-link disabled">New Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/favourites"} className="nav-link disabled">Favourites</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/signin" className="btn btn-dark disabled" type="button">Sign In</Link>
            </div>
        </nav>
    );
};

export default Header;
