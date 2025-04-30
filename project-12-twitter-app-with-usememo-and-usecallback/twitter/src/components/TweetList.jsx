import '../CSS/TweetList.css'
import Tweet from "./Tweet";

function TweetList({tweets, onEditTweet}) {
    return(
        <ul className='tweet-list'>
            {
                tweets.map((tweet) => (
                    <li className='tweet-like-wrapper' key={tweet.id}>
                        <Tweet 
                        tweetId={tweet.id}
                        content={tweet.content} 
                        likeCount={tweet.likeCount} 
                        createdAt={tweet.createdAt.toString()} 
                        onEdit={onEditTweet}
                        
                        />
                    </li>
                ))
            }
        </ul>
    )
}


export default TweetList;