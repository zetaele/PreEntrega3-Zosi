import React, { useState } from 'react';

export default function ItemCount({stock}) {
    const [count, setCount] = useState(stock ? 1: 0);
    
    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleRemove() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button type="button" className="btn btn-primary" disabled={!stock}onClick={handleRemove}>-</button>
            <input type="number" className="text-center" disabled value={count}/>
            <button type="button" className="btn btn-primary" disabled={!stock} onClick={handleAdd}>+</button>
        </>
    )
}
