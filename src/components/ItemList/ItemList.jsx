import React, { memo } from 'react'

import Item from '../Item/Item'

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
