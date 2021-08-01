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
          <div className='wrapper'>
            <Container>
              <ProductCard item={item}></ProductCard>
            </Container>
          </div>
        </Container>
      </Container>
    </>
  );
};
