import React, { FC } from 'react';
import FullWidthContainer from '../Container';
import Button from './../Button';
import './style.scss';

interface CartProps {
  data?: any;
}

interface ItemInterface {
  image: string;
  name: string;
  price: number;
  currency: string;
  isChecked: boolean;
}

const Cart: FC<CartProps> = ({ data }: CartProps) => {
  return (
    <FullWidthContainer>
      <div className="cart__section">
        <p className="cart__section-title">
          {!!data ? `There's is ${data.length} Items in Your Cart` : 'Your Cart Is Empty'}
        </p>
        {!!data
          ? data.map((item: ItemInterface, i: number) => {
            return (
              <div key={i} className="cart__section--item">
                <input className='cart__section--item-checkbox' type="checkbox" name="" id="" />
                <img className='cart__section--item-image' src={item.image} alt="" />
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
