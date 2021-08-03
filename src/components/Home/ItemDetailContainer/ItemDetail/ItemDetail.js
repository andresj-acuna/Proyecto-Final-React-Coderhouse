import React from 'react';

// Component
import { ProductCard } from './ProductCard/ProductCard';

import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className='item-detail-container'>
        <ProductCard item={item}></ProductCard>
      </div>
    </>
  );
};
