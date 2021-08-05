import React, { useState } from 'react';

// Semantic
import { Button } from 'semantic-ui-react';

// React-Router
import { Link } from 'react-router-dom';

// Toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Style
import './ItemCount.css';

export const ItemCount = ({ stock, initial, item, addCart }) => {
  const [count, setCount] = useState(parseInt(initial));

  let btnDel = false;
  let btnAdd = false;
  let btnStock = false;

  const delOneItem = (e) => {
    count > 1
      ? setCount(count - 1)
      : console.log('El stock debe ser mayor a 1');
  };

  const addOneItem = (e) => {
    count < stock ? setCount(count + 1) : console.log('Ha superado el stock');
  };

  const toasti = () => {
    toast.success(
      `${
        count > 1
          ? `Se han agregado ${count} productos a tu carrito`
          : `Se ha agregado ${count} producto a tu carrito`
      }.
      `,
      {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      },
    );
  };

  if (stock === 0) {
    btnStock = true;
  }

  if (stock < 0) {
    btnStock = true;
  }

  if (count === 1) {
    btnDel = true;
  }

  if (count === stock) {
    btnAdd = true;
  }

  return (
    <div>
      <div className='buttons-container'>
        <ToastContainer></ToastContainer>
        <div className='all-buttons'>
          <button
            disabled={btnDel}
            onClick={delOneItem}
            className='minus-button'
          >
            <i className='minus icon'></i>
          </button>

          {stock === 0 || stock < 0 ? (
            <div>
              <p>0</p>
            </div>
          ) : (
            <div>
              <p>{count}</p>
            </div>
          )}

          {stock === 0 || stock < 0 ? (
            <button disabled={btnStock} className='plus-button'>
              <i className='plus icon'></i>
            </button>
          ) : (
            <button
              disabled={btnAdd}
              onClick={addOneItem}
              className='plus-button'
            >
              <i className='plus icon'></i>
            </button>
          )}
        </div>
      </div>
      <div className='cart-button'>
        {stock === 0 || stock < 0 ? (
          <Button
            color='teal'
            disabled={btnStock}
            className='btn_Carrito'
            onClick={() => addCart(count, item)}
          >
            <div className='center-btn-cart'>
              <i className='shopping cart icon'>
                <span>Agregar</span>
              </i>
            </div>
          </Button>
        ) : (
          <Link to={'/cart'}>
            <Button
              color='teal'
              disabled={btnStock}
              className='btn_Carrito'
              onClick={() => {
                addCart(count, item);
                toasti();
              }}
            >
              <div className='center-btn-cart'>
                <i className='shopping cart icon'>
                  <span>Agregar</span>
                </i>
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
