import FullWidthContainer from '../Container';
import placeholderImage2 from './../../Images/placeholder-image.png';
import Button from '../Button';
import './style.scss';

interface Props {
  name?: string;
  price?: number;
  image?: string;
  isDiscount?: boolean;
  storage?: string[];
}

const Product = ({ name, price, image, isDiscount, storage }: Props) => {
  return (
    <FullWidthContainer>
      <div className="product">
        <div className="product__image">
          {isDiscount ? <div className='ribbon'></div> : ''}
          <img src={!!image ? image : placeholderImage2} />
        </div>
        <div className="product__infor">
          <p className="product__infor--name">{!!name ? name : 'This Product is no longer available in our store'}</p>
          <p className="product__infor--price">{isDiscount ? <p><div><s>{price}</s></div>{price ?? 0 * 80 / 100} USD</p> : price + " USD"}</p>
          <ul className="product__infor--storage">
            {storage?.map((item: string, index: number) => <li key={index}>{item}</li>)}
          </ul>
          {!!name ? (
            <div className="button-group">
              <Button isFullWidth={true} status="warning">
                Buy Now
              </Button>
              <Button isFullWidth={true} status="success">
                Add To Cart
              </Button>
              <Button isFullWidth={true} status="danger">
                Contact To Installment
              </Button>
            </div>
          ) : (
            <Button isFullWidth={false} status="success">
              Back To Product Page
            </Button>
          )}
          <div className="product__description">
            <p className="product__description-header">Product Description :</p>
            <p className="product__description-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi recusandae dignissimos maxime et tempora odio repellendus eaque non ab harum? Atque alias facilis, qui minus a impedit minima beatae.
            </p>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  );
};

export default Product;
