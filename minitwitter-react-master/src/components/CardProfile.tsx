import React from 'react';
import uuid from 'uuid/v4';
import { User } from '../models/User';

interface CardProfileProps extends User {
    key?: string,
}


const CardProfile = (props: CardProfileProps) => {

    const { key, name, picture, description, location, webpage } = props;

    return (
        <div >
         <div className="twitter-card">
  <div className="row-top">
    <div className="user-wrapper">
       <div className="profile-user">
           <span className="user">{name}</span>
           <span className="username">@JaneDoe_</span>
       </div>
    </div>
  </div>
  <p className="profile-bio">{description}</p>
  <div className="row-middle">
    <span className="profile-location">
      <i className="fas fa-map-marker-alt"></i>
      {location}
    </span>
    <span className="profile-website">
      <i className="fas fa-link"></i>
      <a href="#">{webpage}</a>
    </span>
  </div>
</div>

        </div>

    );
  
}

CardProfile.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
   };

export default CardProfile;