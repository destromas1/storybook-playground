import React, { Component } from "react";
import { css } from "emotion";

const classX = css`
  padding-top: 100px;
  display: flex;
  color: red;
`;

class AppMineStyledCss extends Component {
  render() {
    return (
      <div className={classX}>
        <header>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
            alt="logo"
          />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppMineStyledCss;
