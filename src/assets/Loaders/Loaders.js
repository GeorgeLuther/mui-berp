// full screen preloadder
import React from "react";
import "./Loaders.css";
import { ReactComponent as BullIcon } from "../Icons/BullIcon.svg";

export default function Loader() {
  return (
    <div className="loader">
      <p className="loading">loading</p>
      <div className="loader">
        <div className="loader-6 center">
          <span></span>
        </div>
        <BullIcon />
        <div className="oval-lg">
          <div className="oval-md"></div>
        </div>
      </div>
      <a
        className="App-link"
        href="https://bullmetal.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        visit our customer website
      </a>
    </div>
  );
}
