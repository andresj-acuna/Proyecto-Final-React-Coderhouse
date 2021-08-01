import React from 'react';

// Component
import { Item } from './Item/Item';

// Style
import './ItemList.css';

export const ItemList = ({ items }) => {
  return (
    <>
      <div className='card'>
        <Item item={items} />
      </div>
    </>
  );
};
