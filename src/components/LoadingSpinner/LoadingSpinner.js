import React from 'react';
import { css } from "@emotion/core";
import DotLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: auto;
  border-color: green;
`;

class LoadingSpinner extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <div className="sweet-loading">
          <DotLoader
            css={override}
            size={60}
            loading={true}
          />
        </div>
      );
    }
}
export default LoadingSpinner;