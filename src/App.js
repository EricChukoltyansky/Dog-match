import "./App.css";
import React, { useState, useEffect } from "react";
import Data from "../src/data.json";

function App() {
  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(data);
  }, [data]);

  const showNext = () => {
    setLiked(liked + 1);
    setData((data + 1) % Data.length);
    console.log("show next data", data);
  };
  const showPrev = () => {
    setDisliked(disliked + 1);
    setData((data + 1) % Data.length);
  };
  const item = Data[data];
  console.log("item", item);
  return (
    <>
      <div className="top">
        <p>liked</p>
        <p>{liked}</p>
        <p>dislikes</p>
        <p>{disliked}</p>
      </div>
      <div className="image-container">
        <div>{item.name}</div>
        <div>{item.desc}</div>
        <div>{item.age}</div>
      </div>
      <div>
        <button onClick={showNext}>Like</button>
        <button onClick={showPrev}>Dislike</button>
      </div>
    </>
  );
}

export default App;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EricChukoltyansky/Dog-match.git
// git push -u origin main