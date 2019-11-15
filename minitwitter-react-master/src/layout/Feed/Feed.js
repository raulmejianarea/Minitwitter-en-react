import React, { Component } from 'react'
import { CommentService } from '../../services/CommentService';
import { PostService } from '../../services/PostService';
import { UserService } from '../../services/UserService';
import { withRouter } from 'react-router';
import UserCard from '../../components/UserCard';
import Tweet from '../../components/Tweet';
import AppLogo from '../../components/AppLogo';
import TweetInput from '../../components/TweetInput';
import AppToolBar from '../../components/AppToolBar';
import '../../styles/style.css';
import Tweetsend from '../../components/Tweetsend';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.commentService = new CommentService();
    this.postService = new PostService();
    this.userService = new UserService();
    this.state = {
      user: {},
      tweets: []
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

      handleAddTodo(todo){
        this.setState({
          tweets: [...this.state.tweets, todo]


        })
      }

  // sendTweet = (post) => {
  //   const { user, tweets } = this.state;
  //   const { content, picture } = post;

  //   const newPost = {
  //     userId: user.id,
  //     content,
  //     picture,
  //   };
  //   this.postService.postOne(newPost)
  //     .then(insertedPost => {
  //       tweets.push(insertedPost);
  //       this.setState({tweets});
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     })
  // }

  componentDidMount() {
    const userPromise = this.userService.getOne("1");
    const tweetsPromise = this.postService.getAll();
    
    
    Promise.all([userPromise, tweetsPromise])
      .then( (params)=> {
        const [user, tweets] = params;
        this.setState({user, tweets})
      })
      .catch(err => console.log(err.message))
  }


  render() {
    console.log(this.state);
    const { user, tweets } = this.state;

    const mappedTweets = tweets.map(e => (
      <Tweet 
        key={e.id+Math.random} 
        {...e} 
        onLike={() => console.log("funcion de like")}
      />));
    
     const mappedtweets = this.state.tweets.map((todo, i)=>{
       return (
        <div>
        <div className="col-xs-10 z">
										<div className="content">
											<div className="name">
												<span> <a href="#" className="user">Pepe Chulo </a><span>Pepe Chulo</span>
												<a href="#">Jun 18</a>
												</span>
											</div>
											<div className="post-content">
												{todo.content}
											</div>
											
											</div>
										</div>

        </div>
       )
     })  

    return (
      <div>
        <AppToolBar/>
        <div className="Card-Profile">
        <UserCard {...user}/>
        <Tweetsend onAddTodo={this.handleAddTodo}></Tweetsend>
        </div>
        <div>
          {mappedtweets}
        </div>
      </div>
    )
  }
}

export default withRouter(Feed);
