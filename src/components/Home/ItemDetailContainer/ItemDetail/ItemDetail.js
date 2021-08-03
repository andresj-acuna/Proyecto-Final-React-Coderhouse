import React from 'react';

// Component
import { ProductCard } from './Card/ProductCard';

//Semantic
import { Container } from 'semantic-ui-react';

import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
  return (
    <>
      <Container className='item-detail-container'>
        <Container className='itemDetail' key={item.id}>
          <Container>
            <ProductCard item={item}></ProductCard>
          </Container>
        </Container>
      </Container>
    </>
  );
};
