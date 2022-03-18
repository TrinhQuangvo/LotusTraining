import React from 'react';
import FullWidthContainer from '../Container';
import placeholderImage from './../../Images/apple-bo-sung-mau-moi-cho-iphone-13.jpg';
import placeholderImage2 from './../../Images/placeholder-image.png';
import Button from '../Button';
import './style.scss';

interface Props {
  name?: string;
  price?: number;
}

const Product = ({ name, price }: Props) => {
  return (
    <FullWidthContainer>
      <div className="product">
        <div className="product__image">
          <img src={!!name ? placeholderImage : placeholderImage2} />
        </div>
        <div className="product__infor">
          <p className="product__infor--name">{!!name ? name : 'This Product is no longer available in our store'}</p>
          <p className="product__infor--price">{price ? `${price} USD` : ''} </p>
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
        </div>
      </div>
    </FullWidthContainer>
  );
};

export default Product;
