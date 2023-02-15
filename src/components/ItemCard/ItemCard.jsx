import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({ description, id, image_url, name, price, stock }) {
  
  return (
    <div className="col">
      <div className="card h-100">
      <img src={image_url} className="card-img-top" alt="Image Preview" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Precio: ${price}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text">Stock: {stock}</p>
        </div>
        <div className="card-footer">
          <Link to={`/PreEntrega2-Zosi/item/${id}`}>
            <button className="btn btn-primary">Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  )
}