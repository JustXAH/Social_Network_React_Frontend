import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 15},
    {id: 2, message: "It's my first post!", likesCount: 23},
    {id: 3, message: "It's my second post!", likesCount: 12},
    {id: 4, message: "It's my third post!", likesCount: 9},
]

let wallpaperPath = "https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg"

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} wallpaperPath={wallpaperPath}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
