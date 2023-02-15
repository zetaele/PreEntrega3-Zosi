import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gFetch } from '../../utils/gFetch';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail';
import Spinner from '../Spinner/Spinner';

export default function ItemDetailContainer() {
  const { itemId = -1 } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {  
    setItem({});
    setIsLoading(true);
    gFetch(parseInt(itemId), 'item')
      .then((response) => { 
        setItem(response);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ocurrió un error al buscar el producto.");
      })
      .finally(() => setIsLoading(false));
  }, [itemId]);

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
