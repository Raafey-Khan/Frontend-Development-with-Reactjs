import { memo, useState } from 'react';
import '../App.css'
import AddTweet from './AddTweet';
import TweetList from './TweetList';
import { useCallback } from 'react';

const initialDummyTweets = [
    {id: 0, content: 'we have a new twitter called as thread', likeCount: 3, createdAt: new Date()},
    {id: 1, content: 'What should we post ??', likeCount: 4, createdAt: new Date()},
    {id: 2, content: 'What is up with tech community ?', likeCount: 5, createdAt: new Date()}
  ];

  const MemoisedAddTweet = memo(AddTweet)

function Twitter(){
    const [tweets, setTweets] = useState(initialDummyTweets)
    const handleAddTweet = useCallback((text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id+1 : 0;
       setTweets([...tweets, {
        content: text,
        likeCount: Math.floor(Math.random() * 10), // this is a random likeCount
        id: nextId,
        createdAt: new Date()
       }])
    },[tweets])

    const handleEditTweet = useCallback((tweet) => {  // this incoming tweet is the updated tweet
      setTweets(
        tweets.map((currentTweet) => {
          if(currentTweet.id == tweet.id){
            return tweet;
          } else{
            return currentTweet;
          }
        })
      )
    }, []);

    const sortTweets = useCallback(() => {
      tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
      setTweets([...tweets]);
    }, [tweets])
    
  
    return (
        <>
        <MemoisedAddTweet onAddTweet={handleAddTweet}  />
        <button onClick={sortTweets}>
          Sort Tweet by Created AT
        </button>
          <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
        </>

    )
}


export default Twitter;