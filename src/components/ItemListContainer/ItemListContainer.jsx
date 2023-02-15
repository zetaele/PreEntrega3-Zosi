import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gFetch } from '../../utils/gFetch';
import ItemCard from '../ItemCard/ItemCard';
import Spinner from '../Spinner/Spinner';

export default function ItemListContainer({greeting = ''}) {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        setIsLoading(true);
        gFetch(parseInt(categoryId), 'category')
          .then((response) => { 
            setProducts(response)
          })
          .catch((error) => {
            console.error(error);
            toast.error("Ocurrió un error al buscar los productos.");
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
