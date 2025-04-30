import { useState } from "react";

function AddTweet({ onAddTweet }) {
  const [text, setText] = useState("");

  const handleTweet = () => {
    onAddTweet(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add new tweet...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTweet} disabled={text.trim() === ""}>
        Tweet !!
      </button>
    </>
  );
}

export default AddTweet;
