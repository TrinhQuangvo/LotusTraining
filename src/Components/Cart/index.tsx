import React, { FC } from 'react'
import FullWidthContainer from '../Container';
import Button from './../Button'
import './style.scss'

interface CartProps {
  data?: any;
}

const Cart: FC<CartProps> = ({ data }) => {
  return (
    <FullWidthContainer>
      <div className="product__section">
        <p className="product__section-title"> {!!data ? `There's is ${data.length} Items in Your Cart` : 'Your Cart Is Empty'} </p>
        {
          !!data ? data.map((item: any) => {
            return (
              <div key={item.id} className="product__section--item">
                <p className="product__section--item-title">{item.name}</p>
                <p className="product__section--item-price">{item.price} {item.currency}</p>
              </div>
            )
          }) : ''
        }
        <p className="product__section--item-total">Total : {!!data ? data.reduce((i: number, a: any, b: any) => a.price + i, 0) + ' USD' : '0 USD'}</p>
        {
          !!data ? <Button isFullWidth={false} status="danger" >Thanh Toán</Button> : ''
        }
      </div>
    </FullWidthContainer >
  )
}

export default Cart
