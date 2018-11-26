import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import PixaBay from "./Components/PixaBay";
import "./static/styles/vendor/normalize.scss";

const Index = () => {
  return (
    <div className="container">
      <Header />
      <PixaBay />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
