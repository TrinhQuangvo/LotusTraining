import React, { FC } from 'react'

interface CartProps {
  message: string;
  data?: any;
}

const Cart: FC<CartProps> = ({ message, data }) => {
  return (
    <div>
      <h1>{message}</h1>
      {!!data ? data.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price} {item.currency}</p>
          </div>
        )
      }) : ''
      }
      Total : {!!data ? data.reduce((i: number, a: any, b: any) => a.price + i, 0) + ' USD' : '0 USD'}
    </div>
  )
}

export default Cart
