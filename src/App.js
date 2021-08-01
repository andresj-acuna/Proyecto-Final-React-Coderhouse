import React from 'react';
import { NavBar } from './components/Home/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { ItemListContainer } from './components/Home/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Home/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { BuyForm } from './components/BuyForm/BuyForm';
import { MyOrders } from './components/MyOrders/MyOrders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path='/Proyecto-Final-React-Coderhouse'>
              <Home />
            </Route>
            <Route exact path='/categories/:category'>
              <ItemListContainer />
            </Route>

            <Route exact path='/detalle/:productID'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/order'>
              <BuyForm />
            </Route>
            <Route exact path='/my-orders'>
              <MyOrders />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
