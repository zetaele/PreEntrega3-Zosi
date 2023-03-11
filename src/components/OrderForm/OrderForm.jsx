import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import Spinner from '../Spinner/Spinner';

import 'react-toastify/dist/ReactToastify.css';

const OrderForm = () => {
    const { cartList, clearCart, createOrder, getItemsPrice } = useCartContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [formData, setFormData] = useState({
        confirmEmail: '',
        email: '',
        name: '',
        phone: ''
    });

    const submitOrder = () => {
        delete formData.confirmEmail;
        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        const order = {
            buyer: formData,
            total: getItemsPrice(),
            items: cartList
        };

        addDoc(queryCollection, order)
            .then((resp) => {
                createOrder(resp.id)
            })
            .catch((error) => {
                console.error(error);
                toast.error("Ocurrió un error al realizar la orden.");
            })
            .finally(() => {
                clearCart();
                setFormData({
                    name: '',
                    phone: '',
                    email: ''
                });
                setIsLoading(false);
            })
    }

    const onChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        
        setIsLoading(true);

        if (formData.email === formData.confirmEmail) {
            setIsEmailValid(true);
            submitOrder();
        } else {
            setIsEmailValid(false);
        }
        
        setIsLoading(false);
    }

    return (
        <div className="d-flex justify-content-center mt-3 p-5 align-items-center border border-2 border-secondary rounded">
            <ToastContainer />
            {
                isLoading 
                    ?
                        <Spinner body="Procesando la orden" />
                    :  
                    (
                        <form className="form-group w-100" onSubmit={onSubmit}>
                            <legend>Datos personales:</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Nombre" onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Teléfono</label>
                                        <input type="number" className="form-control" id="phone" name="phone" placeholder="1154421234" onChange={onChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={onChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmEmail" className="form-label">Confirmar Email</label>
                                        <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" placeholder="name@example.com" onChange={onChange} value={formData.confirmEmail} required />
                                        {
                                            !isEmailValid && <div className="text-danger">Los correos electrónicos no coinciden</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Comprar</button>
                        </form>
                    )
            }
        </div>
    )
}

export default OrderForm;