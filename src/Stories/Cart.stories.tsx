import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Cart from '../Components/Cart'
import { IMAGES } from '../Images'

const products = IMAGES.products

export default {
  title: 'Components/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>

const data = [
  { image: products.MacbookPro14, "name": "Macbook Pro 14", "price": 2200, "currency": "USD", isChecked: false },
  { image: products.MacbookPro16, "name": "Macbook Pro 16", "price": 4000, "currency": "USD", isChecked: false },
  { image: products.iphone13, "name": "Iphone 13", "price": 1400, "currency": "USD", isChecked: false },
  { image: products.IpadProM1, "name": "IPad Pro M1", "price": 1800, "currency": "USD", isChecked: false }
]

export const EmptyCart: ComponentStory<typeof Cart> = () => <Cart />
export const DefaultCart: ComponentStory<typeof Cart> = () => <Cart data={data} />
