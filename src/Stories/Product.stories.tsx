import { ComponentMeta, ComponentStory } from '@storybook/react'
import FullWidthContainer from '../Components/Container'
import Product from '../Components/Product'
import AllProducts from '../Components/Product/AllProducts'
import { IMAGES } from '../Images'

export default {
  title: 'Components/Product',
  component: Product,
} as ComponentMeta<typeof Product>

interface iProduct {
  name?: string;
  price?: number;
  image?: string;
  isDiscount?: boolean;
  storage?: string[]
}

const image = IMAGES.products

const sampleProduct: iProduct = {
  name: 'Iphone 13 Pro Max',
  price: 1800,
  isDiscount: false,
  image: image.iphone13,
  storage: ['256', '512', '1TB']
}

const sampleDiscountProduct: iProduct = {
  name: 'Iphone 13 Pro Max',
  price: 1800,
  image: image.iphone13,
  isDiscount: true,
  storage: ['256', '512', '1TB']
}

const sampleProducts = [
  {
    name: 'Iphone 13 Pro Max',
    price: 1800,
    image: image.iphone13,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Iphone 12 Pro Max',
    price: 1600,
    image: image.iphone12,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Pro M1',
    price: 1800,
    image: image.MacbookPro14,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Air M1',
    price: 1200,
    image: image.MacbookAirM1,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Pro 14',
    price: 2800,
    image: image.MacbookPro14,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Pro 16',
    price: 3800,
    image: image.MacbookPro16,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Ipad Pro M1',
    price: 1200,
    image: image.IpadProM1,
    storage: ['256', '512', '1TB']
  }
]

const sampleProductsDiscount = [
  {
    name: 'Iphone 13 Pro Max',
    price: 1800,
    image: image.iphone13,
    isDiscount: true,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Iphone 12 Pro Max',
    price: 1600,
    image: image.iphone12,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Pro M1',
    price: 1800,
    image: image.MacbookPro14,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Air M1',
    price: 1200,
    image: image.MacbookAirM1,
    isDiscount: true,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Macbook Pro 14',
    price: 2800,
    isDiscount: true,
    storage: ['256', '512', '1TB'],
    image: image.MacbookPro14,
  }, {
    name: 'Macbook Pro 16',
    price: 3800,
    image: image.MacbookPro16,
    isDiscount: true,
    storage: ['256', '512', '1TB']
  }, {
    name: 'Ipad Pro M1',
    price: 1200,
    image: image.IpadProM1,
  }
]

export const NotAvailableProduct: ComponentStory<typeof Product> = () => <Product />
export const DetailProduct: ComponentStory<typeof Product> = () => <Product {...sampleProduct} />

export const ShowAllProducts: ComponentStory<typeof Product> = () => {
  return (
    <FullWidthContainer>
      <div className="product__wrapper">
        {
          sampleProducts.map((item: iProduct, index: number) => <AllProducts key={index} {...item} />)
        }
      </div>
    </FullWidthContainer>
  )
}

export const AllProductsButDiscount: ComponentStory<typeof Product> = () => {
  return (
    <FullWidthContainer>
      <div className="product__wrapper">
        {
          sampleProductsDiscount.map((item: iProduct, index: number) => <AllProducts key={index} {...item} />)
        }
      </div>
    </FullWidthContainer>
  )
}

export const DiscountProduct: ComponentStory<typeof Product> = () => <Product {...sampleDiscountProduct} />
