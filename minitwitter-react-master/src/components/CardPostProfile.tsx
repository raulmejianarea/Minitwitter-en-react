import React from 'react';
import uuid from 'uuid/v4';
import { User } from '../models/User';
import { Post } from '../models/Post';

interface CardPostProfileProps extends User, Post {
    key?: string,
}


const CardPostProfile = (props: CardPostProfileProps) => {

    const { key, name, picture, description, location, webpage } = props;
    const { content, timestamp, likes} = props;

    return (
        <div>
        <div className="col-xs-6 m">
					<div className="posts">
						<div className="post-head">
							<ul className="list-unstyled">
								<li> <a href="#" className="active">Tweets</a> </li>
								<li> <a href="#">Tweets y replies</a> </li>
								<li> <a href="#">Media</a> </li>
							</ul>
						</div>
						<div className="post">
							<div className="post-body">
								<div className="row">
									<div className="col-xs-2 z">
										{/* <a href="#" className="avatar">
											<img src="https://image.flaticon.com/icons/svg/752/752671.svg" className="img-circle">
										</a> */}
									</div>
									<div className="col-xs-10 z">
										<div className="content">
											<div className="name">
												<span> <a href="#" className="user">{name} </a><span>{name} </span>
												<a href="#">Jun 18</a>
												</span>
											</div>
											<div className="post-content">
												{content}
											</div>
											
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
            </div>  </div>                               
     									
    );
  
}

CardPostProfile.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
   };

export default CardPostProfile;