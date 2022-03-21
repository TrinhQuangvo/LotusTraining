import React, { FC } from 'react';
import FullWidthContainer from '../Container';
import profile from './../../Images/profile.jpg';
import Button from '../Button';
import './style.scss';
interface ProfileProps {
  data?: any;
}
const Profile: FC<ProfileProps> = ({ data }) => {
  return (
    <FullWidthContainer>
      <div className="profile">
        <div className="profile-edit">
          <img src={profile} />
          <div>
            <Button status="danger">Update</Button>
            <Button status="warning">Remove</Button>
            <Button status="success">Save</Button>
          </div>
        </div>

        {!!data
          ? data.map((item: any, index: number) => {
              return (
                <div key={index} className="profile-index">
                  <h2 className="profile-index-title">Personal Information</h2>
                  <label htmlFor="">Full name: </label>
                  <input className="input-profile" type="text" placeholder={item.name} />

                  <label htmlFor="">Age: </label>
                  <input className="input-profile" type="text" placeholder={item.age} />

                  <label htmlFor="">Phone: </label>
                  <input className="input-profile" type="date" placeholder={item.date} />

                  <label htmlFor="">Address: </label>
                  <input className="input-profile" type="text" placeholder={item.add} />

                  <label htmlFor="">Phone: </label>
                  <input className="input-profile" type="text" placeholder={item.phone} />

                  <Button isFullWidth={true} status="warning">
                    View more
                  </Button>
                </div>
              );
            })
          : ''}
      </div>
    </FullWidthContainer>
  );
};

export default Profile;
