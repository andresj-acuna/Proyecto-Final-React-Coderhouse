import React, { useContext } from 'react';

// Context
import { CartContext } from '../../Context/CartContext';

// Semantic
import { Icon, Button } from 'semantic-ui-react';

// React-Router
import { Link, useHistory } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Style
import './Cart.css';

export const Cart = ({ item }) => {
  const { cart, total, deleteItem, formatPeso } = useContext(CartContext);
  const history = useHistory();

  const toasti = () => {
    toast.success(
      `Estás a un solo paso! Completá el formulario para coordinar la entrega del producto.`,
      {
        position: 'bottom-left',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      },
    );
  };

  if (cart.length > 0) {
    return (
      <div className='cart-container'>
        <div className='button-back-container'>
          <Button className='button-back' onClick={() => history.goBack()}>
            <i className='arrow left icon'>
              <span>Volver</span>
            </i>
          </Button>
        </div>

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
              <div className='finish-buy-buttons'>
                <div className='btn-finish-buy-container'>
                  <Link to={'/order'}>
                    <Button
                      color='teal'
                      onClick={toasti}
                      className='btn-finish-buy'
                    >
                      <span>Finalizar Compra</span>
                    </Button>
                  </Link>
                </div>
                <div className='btn-more-products-container'>
                  <Link to={'/'}>
                    <Button color='teal' className='btn-more-products'>
                      <span>Agregar más productos</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cart-container'>
        <h2 className='text-cart'>Tu carrito está vacío</h2>
        <Link to={'/'}>
          <Button className='button-back-home'>
            <i className='reply icon'></i>Volver a la tienda
          </Button>
        </Link>
      </div>
    );
  }
};
