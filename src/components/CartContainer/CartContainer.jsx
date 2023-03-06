import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

export default function CartContainer() {
  const { cartList, clearCart, removeItem } = useCartContext();

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const createOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: dataForm,
      total: 100,
      items: cartList
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    // Add order
    addDoc(queryCollection, order)
      .then(resp => console.log(resp))
      .catch(resp => console.log(resp))
      .finally(() => {
        clearCart();
        setDataForm({
          name: '',
          phone: '',
          email: ''
        })
      })

    // Update items stock
    const queryDoc = doc(db, 'products', '36oZMz1Pzg0PkyaRbhk3');
    updateDoc(queryDoc, {
      stock: 10
    })
    .then(() => console.log('updated'))
  };

  const handlerOnChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="container custom-container">
      {
        cartList.map((item) => {
          return (
            // CREAR COMPONENTE DE CART ITEMS APARTE:
            <div key={item.index}>
              <h2>{item.name}</h2>
              <ul>
                <li>Precio: {item.price}</li>
                <li>Categoria: {item.category}</li>
                <li>Cantidad: {item.quantity}</li>
              </ul>
              <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
            </div>
          )
        })
      }

      <p>Precio total:</p>
      <button type="button" className='btn btn-secondary' onClick={clearCart}>Vaciar Carrito</button>

      <div className="d-flex justify-content-center mt-3 p-5 align-items-center border border-2 border-secondary rounded">
        // CREAR COMPONENTE FORM APARTE:
        <form className="form-group w-50" onSubmit={createOrder}>
          <input value={dataForm.name} className='form-control' type="text" name='name' placeholder='ingresar nombre' onChange={handlerOnChange} required/>
          <input value={dataForm.phone} className='form-control' type="number" name='phone' placeholder='ingresar telefono' onChange={handlerOnChange} required/>
          <input value={dataForm.email} className='form-control' type="text" name='email' placeholder='ingresar email' onChange={handlerOnChange} required/>
          <input className='form-control' type="text" name='validarEmail' placeholder='Repetir email' onChange={handlerOnChange} required/>
          <button type="submit" className='btn btn-success mt-2'>Crear Orden</button>
        </form>
      </div>
    </div>
  )
}
