import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

import 'react-toastify/dist/ReactToastify.css';


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore();
  
    useEffect(() => {  
        setItem({});
        setIsLoading(true);
        const queryDoc = doc(db, 'Products', itemId);
        getDoc(queryDoc).then((response) => {
            if (!response.exists()) {
                throw Error("No existe producto indicado.");
            }
            setItem({ id: response.id, ...response.data() });
        })
        .catch((error) => {
            console.error(error);
            toast.error("Ocurrió un error al buscar el producto.");
        })
        .finally(() => setIsLoading(false));
    }, [itemId, db]);

    return (
        <div className="container custom-container">
            <ToastContainer />
                {
                    !isLoading && Object.keys(item).length > 0 && (
                        <ItemDetail item={item} />
                    )
                }
                {
                    isLoading && <Spinner />
                }
        </div>
    )
}

export default ItemDetailContainer;
