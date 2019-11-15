import React, { Component } from 'react';


class TweetSend extends Component {

  constructor () {
    super();
    this.state = {
      content: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      content: '',
      
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
            <div className="container-tweetinput">
        
                <input 
                    type="text"
                    name="content" 
                    className="new-tweet-input"
                    placeholder="Say something . . ." 
                    value={this.state.content}
                    onChange={this.handleInputChange} 
                />
                <button className="btn-tweet" type="submit">Tweet</button>     
            </div>
          
     
        </form>
      </div>
    );
  }
}

export default TweetSend;
