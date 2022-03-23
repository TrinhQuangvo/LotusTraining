import React, { FC } from 'react';
import FullWidthContainer from '../Container/';
import Button from './../Button';

interface UserProps {
  data?: any;
}

const User: FC<UserProps> = ({ data }) => {
  return (
    <FullWidthContainer>
      {!!data ? (
        data.map((item: any, index: number) => {
          return (
            <form key={index} className="registration">
              <h1 className="log-title">Login</h1>
              <div className="login-content">
                <label htmlFor="">Username: </label>
                <input type="text" placeholder={item.username} /> <br />
                <label htmlFor="">Email: </label>
                <input type="text" placeholder={item.email} />
                <br />
                <label htmlFor="">Password: </label>
                <input type="password" />
                <br />
                <label htmlFor="">Confirm Password: </label>
                <input type="password" />
              </div>
            </form>
          );
        })
      ) : (
        <form action="" className="login">
          <h1 className="log-title">Login</h1>
          <div className="login-content">
            <label htmlFor="">Username: </label>
            <input type="text" />
            <br />
            <label htmlFor="">Password: </label>
            <input type="password" />
            <br />
          </div>
          <Button status="danger">Danger Button </Button>
        </form>
      )}
    </FullWidthContainer>
  );
};
export default User;
