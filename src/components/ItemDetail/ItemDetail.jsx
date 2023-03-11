import React from 'react';
import { useCartContext } from '../../context/CartContext';

import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
    const { addToCart } = useCartContext();
    
    const onAdd = (quantity) => {
        addToCart({ quantity, ...item });
    }

    return (
        <div className="col">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={item.image_url} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description.main}</p>
                                <p>{item.description.content}</p>
                                <h3>${item.price}</h3>
                                <span className={`badge text-dark mb-1 ${item.stock ? 'bg-info' : 'bg-warning'}`}>{item.stock ? `${item.stock} en stock` : 'sin stock'}</span>
                            </div>
                        </div>
                        {
                            (item.stock > 0) && (
                                <div className="row">
                                    <ItemCount stock={item.stock} onAdd={onAdd} />
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;
