import React, { ReactElement } from 'react';
import { User } from '../models/User';


interface UserProps extends User {
    key?: string;
    

    
}


const UserCard = (props: UserProps): ReactElement => {
    console.log("PROPS DE LA USERCARD");
    console.log(props);
    const {name, description, email, location, webpage, picture  } = props;

    return (
<div>
<div className="profile-card"><a className="profile-card__background" href="#"></a>
    <div className="profile-card__content"><a className="profile-card__avatar" href="#"></a>
      <div className="profile-card__user">
        <div className="profile-card__name"><a className="profile-card__name--link" href="#">{name}</a></div>
        <div className="profile-card__username"><a className="profile-card__username--link" href="#">@agzeri</a></div>
      </div>
      <div className="profile-card__stats">
        <ul className="profile-card__stat--list">
          <li className="profile-card__stat"><a className="profile-card__stat--link" href="#"><span className="profile-card__label">Tweets</span><span className="profile-card__value">2,327</span></a></li>
          <li className="profile-card__stat"><a className="profile-card__stat--link" href="#"><span className="profile-card__label">Following</span><span className="profile-card__value">5.6K</span></a></li>
          <li className="profile-card__stat"><a className="profile-card__stat--link" href="#"><span className="profile-card__label">Followers</span><span className="profile-card__value">42.9K</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>



    );
}

export default UserCard;