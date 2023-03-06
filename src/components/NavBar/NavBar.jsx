import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import CartWidget from '../CartWidget/CartWidget';
import Spinner from '../Spinner/Spinner';
import './NavBar.css';

export default function NavBar({ brand }) {
    const [nav, setNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore();
    
    useEffect(() => {
        const queryCollection = collection(db, 'Categories');
        console.log("NavBar getDocs");
        getDocs(queryCollection)
            .then(response => {
                const items = response.docs.map(
                    doc => ({ category_id: doc.id, text: doc.data().name })
                )
                setNav(items);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Ocurrió un error al buscar las categorías.");
            })
            .finally(() => setIsLoading(false));
    }, [db]);

    return (
        <>
            <ToastContainer />
            {
                isLoading 
                    ?
                        <Spinner />
                    : 
                    (
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
        </>
    )
}
