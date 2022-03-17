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
        <img src={profile} />
        {!!data
          ? data.map((item: any) => {
              return (
                <div className="profile-index">
                  <h2 className="profile-index-title">Personal Information</h2>
                  <p className="profile-index-item">Full name: {item.name}</p>
                  <p className="profile-index-age">Age: {item.age}</p>
                  <p className="profile-index-add">Address: {item.add}</p>
                  <p className="profile-index-phone">Phone: {item.phone}</p>
                  <Button isFullWidth={true} status="warning">
                    Xem thêm
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
