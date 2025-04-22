import './App.css';
import TweetList from './components/TweetList';

const initialDummyTweets = [
  {id: 0, content: 'we have a new twitter called as thread'},
  {id: 1, content: 'What should we post ??'},
]

function App() {
  return (
    <div>
      <TweetList tweets={[]} />
    </div>
  );
}

export default App;
