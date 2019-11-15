import React from 'react';
import uuid from 'uuid/v4';
import { User } from '../models/User';

interface ProfileToolBarProps extends User {
    key?: string,
}


const ProfileToolBar = (props: ProfileToolBarProps) => {

    const { key, picture, name } = props;

    return (
        <div >
           <nav className="main-nav">
		<div className="container">
			<div className="row">
				<div className="col-xs-3">
					<div className="profile-avatar">
					<img src={picture} ></img>
					</div>
				</div>
				<div className="col-xs-6 hidden-xs hidden-xs">
                    <div className="listnum">  
					<ul className="list-unstyled num">
						<li className="active">
							<a href="#">
					Tweets
						<span>1500</span>
					</a>
						</li>
						<li>
							<a href="#">
					Following
						<span>200</span>
					</a>
						</li>
						<li>
							<a href="#">
					Followers
						<span>107</span>
					</a>
						</li>
						<li>
							<a href="#">
					Likes
						<span>3000</span>
					</a>
						</li>
						<li>
							<a href="#">
					Moments
						<span>0</span>
					</a>
						</li>
                        <button className="btn edit">edit profile</button>
					</ul>
                    </div>
				</div>
				
			</div>
		</div>
	</nav>

        </div>

    );
  
}

ProfileToolBar.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
   };

export default ProfileToolBar;