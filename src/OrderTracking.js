import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function OrderTracking() {
    const [trackingId, setTrackingId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const history = useHistory();
    const Navigate = () => {
        history.push("update-status");
    }

    const fetchOrder = () => {
        // Getting data from this url
        axios.get(`http://localhost:5000/order/${trackingId}`)
            .then((response) => {
                // Data comes from the server
                setOrderDetails(response.data.order);
                alert("Order has been tracked successfully.");
            })
            .catch((error) => {
                console.error('Error fetching order details:', error);
            });
    };

    return (
        <div className='container'>
            <div className='container' style={{marginTop: '50px'}}>
                <h2>Track Your Order</h2>
                <div className='row col-md-4' style={{marginBottom: '14px', marginLeft: '1px'}}>
                    <label style={{padding: '0'}}>Enter Tracking ID:</label>
                    <input
                        type="text"
                        placeholder="Enter Tracking ID"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                    />
                </div>
                <button className='btn btn-success' style={{marginRight: '14px'}} onClick={fetchOrder}>Track Order</button>
                {orderDetails && (
                    <div>
                        <h3>Order Details</h3>
                        <p>Order ID: {orderDetails.OrderId}</p>
                        <p>Product Name: {orderDetails.productName}</p>
                        <p>Price: {orderDetails.price}</p>
                        {orderDetails.orderStatus && (
                            <div>
                                <h4>Order Status</h4>
                                <ul>
                                    {orderDetails.orderStatus.map((status, index) => (
                                        <li key={index}>
                                            <p>Status: {status.status}</p>
                                            <p>Place: {status.place}</p>
                                            <p>Time: {status.time}</p>
                                            <p>To Be Delivered Time: {status.toBeDeliveredTime}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                <button className='btn btn-primary' onClick={Navigate}>Update Status</button>
            </div>
        </div>
    );
}

export default OrderTracking;