import React from 'react'
import FullWidthContainer from '../Container'
import placeholderImage from './../../Images/apple-bo-sung-mau-moi-cho-iphone-13.jpg'
import placeholderImage2 from './../../Images/placeholder-image.png'
import './style.scss'

type Props = {
  name?: string;
  price?: number;
}

function Product({ name, price }: Props) {
  return (
    <FullWidthContainer>
      <div className='product'>
        <div className="product__image">
          <img src={!!name ? placeholderImage : placeholderImage2} />
        </div>
        <div className="product__infor">
          <p className="product__infor--name">{!!name ? name : 'This Product is no longer available in our store'}</p>
          <p className="product__infor--price">{price ? `${price} USD` : ''} </p>
          {!!name ? <div className="button-group">
            <button className='btn btn-warning btn-block'>Mua Ngay</button>
            <button className='btn btn-success btn-block'>Thêm Vào Giỏ Hàng</button>
            <button className='btn btn-danger btn-block'>Liên Hệ Trả Góp</button>
          </div> : ''}

        </div>
      </div>
    </FullWidthContainer>
  )
}

export default Product