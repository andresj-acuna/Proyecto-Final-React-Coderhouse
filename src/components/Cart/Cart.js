import React, { useContext } from 'react';

// Context
import { CartContext } from '../../Context/CartContext';

// Semantic
import { Icon, Button } from 'semantic-ui-react';

// React-Router
import { Link } from 'react-router-dom';

// Style
import './Cart.css';

export const Cart = ({ item }) => {
  const { cart, total, deleteItem, formatPeso } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <div className='cart-container'>
        <div className='cart'>
          <div className='cart-columns'>
            <p></p>
            <p className='truncate'>Producto</p>
            <p className='truncate'>Nombre</p>
            <p className='truncate'>Cantidad</p>
            <p className='truncate'>Valor unitario</p>
            <p className='truncate'>Total</p>
          </div>
          <div className='cart-items'>
            {cart.map((item, i) => (
              <div className='cart-items-container' key={i}>
                <div className='cart-item' key={item.item}>
                  <Icon
                    onClick={() => deleteItem(item.item)}
                    link
                    name='close'
                  />
                  <div
                    className='item-img item'
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                  <div className='item-name item'>{item.item}</div>
                  <div className='item-quantity item'>{item.quantity}</div>
                  <div className='item-value item'>
                    {formatPeso(item.price)}
                  </div>
                  <div className='item-totalValue item'>
                    {formatPeso(item.quantity * item.price)}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className='cart-total'>
            <p className='total-amount'>Subtotal {formatPeso(total)}</p>
            <div className='finish-buy'>
              <Link to={'/order'}>
                <Button color='teal'>
                  <span>Finalizar Compra</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cart-container'>
        <h2 className='text-cart'>Tu carrito está vacío</h2>
        <Link to={'/Proyecto-Final-React-Coderhouse'} className='link-carrito'>
          <Button className='button-regresar'>
            <i className='reply icon'></i>Volver a la tienda
          </Button>
        </Link>
      </div>
    );
  }
};
