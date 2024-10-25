import React from "react";
import s from "./index.module.scss";
import img from "./image_NotfoundPage/cactus.svg";
const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div className={s.errorCode}>
        <span>4</span>
        <img className={s.cactus} src={img} alt="mode" />
        <span>4</span>
      </div>
      <h1 className={s.title}>Page Not Found</h1>
      <p className={s.description}>
        We’re sorry, the page you requested could not be found. <p></p> Please
        go back to the homepage.
      </p>
      <button className={s.button} onClick={() => (window.location.href = "/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
