import React, { useContext } from 'react';

// Semantic
import { Card, Image, Button } from 'semantic-ui-react';

// Context
import { CartContext } from '../../../../../Context/CartContext';

// React-Router
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  const { formatPeso } = useContext(CartContext);

  return (
    <>
      {item.map((data) => (
        <Card key={data.id}>
          <Image src={data.imageUrl} width='5' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>

            <Card.Description>
              <p>{formatPeso(data.price)}</p>

              <Link to={`/detalle/${data.id}`}>
                <Button color='teal'>
                  <span>Detalles</span>
                </Button>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
