import React from 'react';
import uuid from 'uuid/v4';


interface TweetInputProps {
    key?: string,
}

const TweetInput = (props: TweetInputProps) => {

    const { key } = props;

    return (
    <div className="container-tweetinput">
        
        <input placeholder="Say something . . ." type="text" className="new-tweet-input" id="new-tweet" />        
        <button className="btn-tweet" id="tweet">Tweet</button>

    </div>
    );
   
}

TweetInput.defaultProps = {
    key: uuid(),
   };
export default TweetInput;