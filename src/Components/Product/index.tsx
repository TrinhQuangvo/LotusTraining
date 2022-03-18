import React from 'react';
import FullWidthContainer from '../Container';
import placeholderImage from './../../Images/apple-bo-sung-mau-moi-cho-iphone-13.jpg';
import placeholderImage2 from './../../Images/placeholder-image.png';
import Button from '../Button';
import './style.scss';

interface Props {
  name?: string;
  price?: number;
};

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
<<<<<<< HEAD
          {!!name ? (
            <div className="button-group">
              <Button isFullWidth={true} status="warning">
                Mua Ngay
              </Button>
              <Button isFullWidth={true} status="success">
                Thêm Vào Giỏ Hàng
              </Button>
              <Button isFullWidth={true} status="danger">
                Liên Hệ Trả Góp
              </Button>
            </div>
          ) : (
            <Button isFullWidth={false} status="success">
              Trở Về Trang Mua Hàng
            </Button>
          )}
=======
          {!!name ? <div className="button-group">
            <Button isFullWidth={true} status='warning'>Mua Ngay</Button>
            <Button isFullWidth={true} status='success' >Thêm Vào Giỏ Hàng</Button>
            <Button isFullWidth={true} status='danger'>Liên Hệ Trả Góp</Button>
          </div> : <Button isFullWidth={false} status='success'>Trở Về Trang Mua Hàng</Button>
          }
>>>>>>> main
        </div>
      </div>
    </FullWidthContainer>
  );
};

export default Product;
