import React, { Component } from 'react';
import { withRouter } from "react-router";
import { UserService } from '../../services/UserService';
import AppLogo from '../../components/AppLogo';
import UserCard from '../../components/UserCard';
import '../../styles/style.css';
import { PostService } from '../../services/PostService';
import AppToolBar from '../../components/AppToolBar';
import ProfileToolBar from '../../components/ProfileToolBar';
import CardProfile from '../../components/CardProfile';
import CardPostProfile from '../../components/CardPostProfile';
import { post } from '../../mocked_data';
import TweetInput from '../../components/TweetInput';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.userService = new UserService();
    this.state = {
      user: {},
      tweets: []
    }
  }



  componentDidMount(){
    const userPromise = this.userService.getOne("1");
    const tweetsPromise = this.postService.getAll();
    
    Promise.all([userPromise,  tweetsPromise])
      .then( (params)=> {
        const [user, tweets] = params;
        this.setState({user, tweets})
      })
      .catch(err => console.log(err.message))
  }

  render() {
    const { user, tweets} = this.state;
    return (
      <div>        
        <AppToolBar/>
        <section class="cover">
      	</section>
        <ProfileToolBar {...user}/>
        {/* <UserCard {...user}/> */}
        <div className="Card-Profile">
        <CardProfile {...user}/>
        <CardPostProfile {...user} {...post}/>
        </div>
    
      </div>
    )
  }
}

export default withRouter(Profile);
