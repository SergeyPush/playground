import React from "react";
import Image from "../components/Image";
import style from "../components/styles/App.module.css";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div className={style.imgContainer}>
        <Image image="https://picsum.photos/300/300?random=1" />
        <Image image="https://picsum.photos/300/300?random=2" />
        <Image image="https://picsum.photos/300/300?random=3" />
      </div>
    </div>
  );
};

export default HomePage;
