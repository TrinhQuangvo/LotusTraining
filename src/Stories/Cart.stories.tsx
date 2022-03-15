import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cart from '../Components/Cart'

export default {
  title: 'Components/Cart',
  component: Cart
} as ComponentMeta<typeof Cart>
const data: any = [
  { "id": 1, "name": "Macbook Pro 14", "price": 2200, "currency": "USD" },
  { "id": 2, "name": "Macbook Pro 16", "price": 4000, "currency": "USD" },
  { "id": 3, "name": "Iphone 13", "price": 1400, "currency": "USD" },
  { "id": 4, "name": "Iphone 13 Pro Max", "price": 1800, "currency": "USD" }
]
export const EmptyCart = () => <Cart message='No Item Found' />
export const DefaultCart = () => <Cart message="There's 4 items in your cart" data={data} />