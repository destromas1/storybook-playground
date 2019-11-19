import React, { Component, Fragment } from 'react';
import styled from "styled-components";

const StyledSpinner = styled.div`
  border: 16px solid ${props => props.color || "red"};
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

class Spinner extends Component {
  render() {
    return (
      <Fragment>
        <StyledSpinner color="#f3f3f3" />
        <hr />
        <StyledSpinner />
      </Fragment>
    );
  }
}

export default Spinner;
