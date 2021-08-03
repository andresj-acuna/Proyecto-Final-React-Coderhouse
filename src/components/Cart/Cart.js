import React, { useContext } from 'react';

// Context
import { CartContext } from '../../Context/CartContext';

// Semantic
import { Table, Icon, Button } from 'semantic-ui-react';

// React-Router
import { Link } from 'react-router-dom';

// Style
import './Cart.css';

export const Cart = ({ item }) => {
  const { cart, total, deleteItem, formatPeso } = useContext(CartContext);

  return (
    <div className='cart-container'>
      {cart.length > 0 ? (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell className='quantity'>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>Eliminar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {cart.map((item, i) => (
            <>
              <Table.Body key={i}>
                <Table.Row>
                  <Table.Cell clasName='imgProduct'>
                    <div className='product-table'>
                      <img src={item.imageUrl} alt={item.item} width='100' />
                      <p>{item.item}</p>
                    </div>
                  </Table.Cell>

                  <Table.Cell>{formatPeso(item.price)}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell>
                    {formatPeso(item.quantity * item.price)}
                  </Table.Cell>
                  <Table.Cell>
                    <Icon
                      onClick={() => deleteItem(item.item)}
                      link
                      name='close'
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
                <Table.Row></Table.Row>
              </Table.Body>
            </>
          ))}

          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <h3>
                {' '}
                Subtotal: <span>{formatPeso(total)}</span>
              </h3>
            </Table.Cell>
            <Table.Cell>
              <Link to={'/order'}>
                <Button color='teal'>
                  <span>Finalizar Compra</span>
                </Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table>
      ) : (
        <div className='cart-container'>
          <h2 className='text-cart'>Tu carrito está vacío</h2>
          <Link
            to={'/Proyecto-Final-React-Coderhouse'}
            className='link-carrito'
          >
            <Button className='button-regresar'>
              <i className='reply icon'></i>Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
