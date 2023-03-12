import React, { memo } from 'react'

import Item from '../Item/Item'

/**
 * Renders a list of products in the form of an array of Item components.
 * Memoized to avoid unnecessary re-renders.
 * @param {Array} products - An array of product objects to be displayed.
 * @returns {JSX.Element} - Rendered list of products.
 */
const ItemList = memo(({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map((p, i) => 
                    <Item key={p.id} item={p} />
                )
            }
        </div>
      )
});

export default ItemList;
