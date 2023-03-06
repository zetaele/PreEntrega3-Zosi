import { doc, getDoc, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail';
import Spinner from '../Spinner/Spinner';

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const db = getFirestore();
  
  useEffect(() => {  
    setItem({});
    setIsLoading(true);
    const queryDoc = doc(db, 'Products', itemId);
    getDoc(queryDoc).then(response => {
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
            <ItemCardDetail key={item.id} {...item} />
          )
        }
        {
          isLoading && <Spinner />
        }
    </div>
  )
}
