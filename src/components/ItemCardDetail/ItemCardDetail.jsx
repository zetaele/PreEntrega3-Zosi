import React from 'react'

import ItemCount from '../ItemCount/ItemCount'
import './ItemCardDetail.css'

export default function ItemCardDetail({ description, id, image_url, name, price, stock }) {
  return (
    <div className="card item-card-detail">
      <img src={image_url} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Precio: ${price}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">Stock: {stock}</p>
      </div>
      <div className="card-footer">
        <ItemCount stock={stock}/>
      </div>
    </div>
  )
}