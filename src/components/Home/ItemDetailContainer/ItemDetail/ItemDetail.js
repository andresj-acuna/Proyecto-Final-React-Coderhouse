import React from 'react';

// React-router
// import { useHistory } from 'react-router-dom';

// Component
import { ProductCard } from './ProductCard/ProductCard';

import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
  // const history = useHistory();

  return (
    <>
      <div className='item-detail-container'>
        {/* <div className='button-back-container'>
          <button className='button-back' onClick={() => history.goBack()}>
            <i className='arrow left icon'>
              <span>Volver</span>
            </i>
          </button>
        </div> */}
        <ProductCard item={item}></ProductCard>
      </div>
    </>
  );
};
