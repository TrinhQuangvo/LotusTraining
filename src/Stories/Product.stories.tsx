import { ComponentMeta, ComponentStory } from '@storybook/react'
import Product from '../Components/Product'

export default {
  title: 'Components/Product',
  component: Product
} as ComponentMeta<typeof Product>

const sampleProduct = {
  name: 'Iphone 13 Pro Max',
  price: 1800
}

export const NotAvailableProduct: ComponentStory<typeof Product> = () => <Product />
export const DefaultProduct: ComponentStory<typeof Product> = () => <Product {...sampleProduct} />
