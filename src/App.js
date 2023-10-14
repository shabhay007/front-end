import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderForm from './OrderForm';
import OrderTracking from './OrderTracking';
import DeliveryStatus from './DeliveryStatus';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <OrderForm />
        </Route>
        <Route path="/track-order">
          <OrderTracking />
        </Route>
        <Route path="/update-status">
          <DeliveryStatus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

