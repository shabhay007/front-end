import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function OrderForm() {
    const history = useHistory();
    const [order, setOrder] = useState({
        productName: '',
        price: '',
    });

    const [trackingId, setTrackingId] = useState('');

    const Navigate = () => {
        console.log("clicked");
        history.push("track-order");
    }

    const placeOrder = () => {
        // It sends request to backend and places the order and generates the tracking ID
        const data = {
            productName: order.productName,
            price: order.price,
        };

        // POST request to backend
        axios.post('http://localhost:5000/newOrder/', data)
            .then((response) => {
                setTrackingId(response.data.order._id);
                alert("Order has been placed successfully. Please keep Tracking Id secure, so that you can track your order.");
            })
            .catch((error) => {
                console.error('Error placing the order:', error);
            });
    };

    return (
        <div className='container'>
            <div className='container' style={{marginTop : '40px'}}>
                <div style={{marginBottom : '28px'}}>
                    <h2>Place an Order</h2>
                </div>
                <div className='col'  style={{marginBottom : '14px'}}>

                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={order.productName}
                            onChange={(e) => setOrder({ ...order, productName: e.target.value })}
                            style={{marginLeft: '15px'}}
                        />
                    </div>
                    <div className='col-md-4'  style={{marginBottom: '15px'}}>
                        <label>Price: </label>
                        <input
                            type="text"
                            placeholder="Price"
                            value={order.price}
                            onChange={(e) => setOrder({ ...order, price: e.target.value })}
                            style={{marginLeft: '83px'}}
                        />
                    </div>

                    <button className='col-md-2 btn btn-success' style={{marginBottom : '14px', marginRight: '20px'}} onClick={placeOrder}>Place Order</button>
                    {trackingId && <p>Tracking ID: {trackingId}</p>}
                    <button className='col-md-2 btn btn-primary' style={{margin: '0 0 13px 10px'}} onClick={Navigate}>Track Your Order</button>

                </div>

            </div>
        </div>
    );
}

export default OrderForm;
