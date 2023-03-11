import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

import 'react-toastify/dist/ReactToastify.css';

const ItemListContainer = ({ greeting = '' }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore();

    useEffect(() => {
        setProducts([]);
        setIsLoading(true);
        const queryCollection = 
            categoryId ? query(collection(db, 'Products'), where('category_id', '==', categoryId)) : collection(db, 'Products');
    
        getDocs(queryCollection)
            .then((response) => {
                if (response.empty) {
                    throw Error("No existen productos para la categoría indicada.");
                }
                setProducts(
                    response.docs.map(
                        doc => ({ id: doc.id, ...doc.data() })
                    )
                );
            })
            .catch((error) => {
                console.error(error);
                toast.error("Ocurrió un error al buscar productos.");
            })
            .finally(() => setIsLoading(false));

      }, [categoryId]);

    return (
        <div className="container custom-container">
            <ToastContainer />
            {
                isLoading 
                    ?
                        <Spinner />
                    : 
                    (
                        <>
                            <h2>{greeting}</h2>
                            <ItemList products={products}></ItemList>
                        </>
                    )
            }      
        </div>
    );
}

export default ItemListContainer;