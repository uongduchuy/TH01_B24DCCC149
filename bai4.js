import React, { useState } from 'react';
function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1); 
  };
  const handleDislike = () => {
    setDislikes(dislikes + 1); 
  };
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <p>{text}</p>
      <div>
        <button onClick={handleLike}>👍 {likes}</button>
        <button onClick={handleDislike}>👎 {dislikes}</button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bài 4: Like/Dislike Post</h1>
      
      {/* Render các bài post */}
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}
export default App;
