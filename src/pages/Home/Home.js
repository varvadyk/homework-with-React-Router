import React from 'react';
import './Home.css';
import CursorImg from '../../assets/img/cursor.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="tite"> People CURSOR you are cool.
      I am happy know you!</div>
     
<img src={CursorImg} className="img_cursor" alt="photo" />
    </div>
  );
}

export default Home;