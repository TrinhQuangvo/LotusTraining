import Button from '../Button';

interface Props {
  name?: string;
  price?: number;
  image?: string;
  isDiscount?: boolean;
  storage?: string[]
}

function AllProducts({ image, name, price, isDiscount, storage }: Props) {
  return (
    <div className="product__wrapper--item">
      {isDiscount ? <div className='discount-ribbon'></div> : ''}
      <img src={image} />
      <p className='product__wrapper--item-name'>{name}</p>
      <ul className='product__wrapper--item-storage'>
        {storage?.map((item: string, index: number) => <li key={index}>{item}</li>)}
      </ul>
      <div className='product__wrapper--item-price'>{isDiscount ? <p><div><s>{price}</s></div>{price ?? 1 * 80 / 100}</p> : price + " USD"} </div>
      <div className='product__wrapper--item-buttons'>
        <Button isFullWidth={false} status={'success'}>Buy Now</Button>
        <Button isFullWidth={false} status={'warning'}>Add To Cart</Button>
      </div>
    </div>
  )
}

export default AllProducts