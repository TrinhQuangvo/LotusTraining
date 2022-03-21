import React, { FC } from 'react';
import FullWidthContainer from '../Container';
import Button from './../Button';
import './style.scss';

interface CartProps {
  data?: any;
}

const Cart: FC<CartProps> = ({ data }: CartProps) => {
  return (
    <FullWidthContainer>
      <div className="cart__section">
        <p className="cart__section-title">
          {!!data ? `There's is ${data.length} Items in Your Cart` : 'Your Cart Is Empty'}
        </p>
        {!!data
          ? data.map((item: any) => {
            return (
              <div key={item.id} className="cart__section--item">
                <input type="checkbox" name="" id="" />
                <p className="cart__section--item-title">{item.name}</p>
                <p className="cart__section--item-price">
                  {item.price} {item.currency}
                </p>
              </div>
            );
          })
          : ''}
        <p className="cart__section--item-total">
          Total : {!!data ? data.reduce((i: number, a: any, b: any) => a.price + i, 0) + ' USD' : '0 USD'}
        </p>
        {!!data ? (
          <Button isFullWidth={false} status="danger">
            Purchase
          </Button>
        ) : (
          ''
        )}
      </div>
    </FullWidthContainer>
  );
};

export default Cart;
