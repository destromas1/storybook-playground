import React, { Component } from 'react';
// import styles from "./appMineStyles.css";

class AppMine extends Component {
  render() {
    return (
      <div className={"styles.redarea"}>
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppMine;
