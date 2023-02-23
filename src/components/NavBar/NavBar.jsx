import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar({ brand }) {
    const nav = [
      {
        text: 'Calzado',
        category_id: 1,
        link: '#'
      },
      {
        text: 'Remeras',
        category_id: 2,
        link: '#'
      },
      {
        text: 'Otros',
        category_id: 3,
        link: '#'
      },
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/PreEntrega3-Zosi/" className="navbar-brand">
                        <span>{brand}</span>
                    </Link>
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                nav.map((item) =>
                                    <li key={ item.text } className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to={`/PreEntrega3-Zosi/category/${item.category_id}`}>
                                            {item.text}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-md-3 text-end">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}
