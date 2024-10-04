import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="homepage">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_textures.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="overlay">
          <h1 className="title">Welcome to Eclectic Ke!</h1>
          <p className="description">
            Explore our collection of beautiful room decor ideas and inspiration
          </p>
          <Link to="/products">
            <button className="button">Start Exploring</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;