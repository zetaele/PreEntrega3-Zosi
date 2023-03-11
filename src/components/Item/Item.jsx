import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  
    return (
        <div className="col">
            <div className="card h-100">
                <div className="h-75">
                    <img src={item.image_url} className="card-img-top" alt={item.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Precio: ${item.price}</h6>
                    <p className="card-text">{item.description.main}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/item/${item.id}`}>
                        <button className="btn btn-primary">Detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;