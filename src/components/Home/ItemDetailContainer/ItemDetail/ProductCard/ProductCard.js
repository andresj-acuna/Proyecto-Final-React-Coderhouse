import React from 'react';

// Hooks
import { useState, useContext } from 'react';

// Component
import { ItemCount } from '../../../ItemCount/ItemCount';

// Context
import { CartContext } from '../../../../../Context/CartContext';

// Semantic
import { Rating, Button } from 'semantic-ui-react';

// React-router
import { useHistory } from 'react-router-dom';

// Style
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const { formatPeso } = useContext(CartContext);

  const [initial, setInitial] = useState(1);

  const myContext = useContext(CartContext);

  const addCart = (count, item) => {
    myContext.addToCart({
      item: item.title,
      quantity: count,
      price: item.price,
      imageUrl: item.imageUrl,
      id: item.id,
      stock: item.stock,
    });

    setInitial(count);
    myContext.updateItems();
  };

  const history = useHistory();

  return (
    <>
      <div className='button-back-container'>
        <Button className='button-back' onClick={() => history.goBack()}>
          <i className='arrow left icon'>
            <span>Volver</span>
          </i>
        </Button>
      </div>
      <div className='item-container'>
        <div className='item-image'>
          <img src={item.imageUrl} className='item-image' alt='item-detail' />
        </div>

        <div className='item-content'>
          <div className='item-title'>
            <h2>{item.title}</h2>
          </div>
          <div>
            <Rating icon='star' defaultRating={5} maxRating={5} clearable />
          </div>
          <div className='item-price'>
            <h3>{formatPeso(item.price)}</h3>
          </div>
          <div className='item-description'>
            <p>{item.detail}</p>
          </div>

          <div>
            {item.stock > 0 ? (
              <div className='tags'>
                <span className='tag tag-stock'>En stock</span>
              </div>
            ) : (
              <div className='tags'>
                <span className='tag tag-no-stock'>Sin stock</span>{' '}
              </div>
            )}
          </div>

          <ItemCount
            stock={item.stock}
            initial={initial}
            item={item}
            addCart={addCart}
          />
        </div>
      </div>
    </>
  );
};
