import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCard from '../ItemCard/ItemCard';
import Spinner from '../Spinner/Spinner';

export default function ItemListContainer({greeting = ''}) {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore();

    useEffect(() => {
        setProducts([]);
        setIsLoading(true);
        const queryCollection = collection(db, 'Products');
        let q = '';
        if (categoryId) {
            q = query(queryCollection, where('category_id', '==', categoryId));
        } else {
            q = queryCollection;
        }

        getDocs(q).then(response => {
            setProducts(
                response.docs.map(
                    doc => ({ id: doc.id, ...doc.data() })
                )
            );
            setIsLoading(false);
        })
      }, [categoryId, db]);

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
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map((p, i) => 
                                    <ItemCard key={p.id} {...p} />
                                )
                            }
                        </div>
                    </>
                    )
            }      
        </div>
    );
}
