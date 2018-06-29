import React, { Component } from 'react';
import styled from "styled-components";

const StyledWidget = styled.div`
  padding-top: 100px;
  display: flex;
  color: red;
`;

class AppMineStyledCom extends Component {
  render() {
    return (
      <StyledWidget>
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </StyledWidget>
    );
  }
}

export default AppMineStyledCom;
