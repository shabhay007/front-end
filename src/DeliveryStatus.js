import React, { useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function DeliveryStatus() {
    const [newTrackingId, setNewTrackingId] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newPlace, setNewPlace] = useState('');
    const [newTime, setNewTime] = useState('');
    const [remainingTime, setRemainingTime] = useState('');

    const updateDeliveryStatus = () => {
        // Sends request to backend to update the delivery status
        //console.log(remainingTime)
        const data = {
            status: newStatus,
            place: newPlace,
            time: newTime,
            toBeDeliveredTime: remainingTime,
        };

        // PUT request to backend
        axios.put(`http://localhost:5000/order/status/${newTrackingId}`, data)
            .then((response) => {
                alert("Status has been updated successfully.")
            })
            .catch((error) => {
                console.error('Error updating delivery status:', error);
            });
    };

    return (
        <div className='container'>
            <div className='container' style={{marginTop: '50px'}}>
                <div style={{marginBottom: '25px'}}>
                    <h2>Update Delivery Status</h2>
                </div>
                <div className='col'>
                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>Tracking ID:</label>
                        <input
                            type="text"
                            placeholder="Tracking Id"
                            value={newTrackingId}
                            onChange={(e) => setNewTrackingId(e.target.value)}
                            style={{marginLeft: '60px'}}
                        />
                    </div>
                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>New Status:</label>
                        <input
                            type="text"
                            placeholder="New Status"
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            style={{marginLeft: '59px'}}
                        />
                    </div>
                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>New Place:</label>
                        <input
                            type="text"
                            placeholder="New Place"
                            value={newPlace}
                            onChange={(e) => setNewPlace(e.target.value)}
                            style={{marginLeft: '65px'}}
                        />
                    </div>
                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>New Time:</label>
                        <input
                            type="text"
                            placeholder="New Time"
                            value={newTime}
                            onChange={(e) => setNewTime(e.target.value)}
                            style={{marginLeft: '67px'}}
                        />
                    </div>
                    <div className='col-md-4' style={{marginBottom: '15px'}}>
                        <label>Remaining Time:</label>
                        <input
                            type="text"
                            placeholder="Remaining Time"
                            value={remainingTime}
                            onChange={(e) => setRemainingTime(e.target.value)}
                            style={{marginLeft: '26px'}}
                        />
                    </div>
                </div>
                <button className='btn btn-success' style={{marginTop: '15px'}} onClick={updateDeliveryStatus}>Update Status</button>
            </div>
        </div>
    );
}

export default DeliveryStatus;
