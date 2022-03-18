import React, { FC } from 'react';
import FullWidthContainer from '../Container';
import './style.scss';
import placeholderImage from './../../Images/apple-bo-sung-mau-moi-cho-iphone-13.jpg';
import Button from '../Button';

interface CheckoutProps {
  data?: any;
}
const Checkout: FC<CheckoutProps> = ({ data }) => {
  return (
    <FullWidthContainer>
      <>
        <h1 className="checkout-index-title">Checkout</h1>
        <div className="checkout">
          <img src={placeholderImage} />
          {!!data
            ? data.map((item: any) => {
              return (
                <div className="checkout-container">
                  <form className="checkout-container-order">
                    <h3>Đơn hàng</h3>
                    <p className="checkout-index-name">Name Produce: {item.name}</p>
                    <p className="checkout-index-price">
                      Price Produce: {item.price}
                      {item.currency}
                    </p>
                  </form>
                  <form className="checkout-container-details">
                    <h3>Shipment Details</h3>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" placeholder="Full name" />
                    <br />
                    <label htmlFor="">Phone number</label> <br />
                    <input type="text" placeholder="Phone number" />
                  </form>
                </div>
              );
            })
            : ''}
          <form className="checkout-container-details">
            <label htmlFor="">Address: </label> <br />
            <input type="text" placeholder="Address" />
            <br />
            <label htmlFor="">Payment methods: </label> <br />
            <select className="form-select">
              <option selected>Cash</option>
              <option value="1">Transfer</option>
              <option value="2">Credit</option>
            </select>
            <div className="details_btn">
              <Button isFullWidth={false} status="danger">
                Office
              </Button>
              <Button isFullWidth={false} status="danger">
                Home
              </Button>
            </div>
            <Button status="danger" isFullWidth={true}>
              Save
            </Button>
          </form>
        </div>
      </>
    </FullWidthContainer>
  );
};
export default Checkout;
