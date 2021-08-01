import React, { useState, useEffect } from 'react';

// Component
import { ItemDetail } from './ItemDetail/ItemDetail';

// React-Router
import { useParams } from 'react-router-dom';

// Semantic
import { Loader, Container } from 'semantic-ui-react';

//Firebase
import { db } from '../../../firebase/firebase';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(productID);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setItem('not exist');
          return;
        }

        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => console.log(error));
  }, [productID]);

  return (
    <>
      {item.length === 0 ? (
        <Container className='container-loader'>
          <Loader active inline='centered' size='large'>
            Cargando el producto
          </Loader>
        </Container>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};
