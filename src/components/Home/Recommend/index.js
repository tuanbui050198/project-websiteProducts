import React, { Component } from "react";
import * as text from "../../../constants/text";

class Recommend extends Component {
  render() {
    return (
      <div className="recommend container">
        <div className="row">
          <strong>
            <h4>
              {text.TXT_TITLE_RECOMMEND}
            </h4>
          </strong>
          <div className="content">
            <span>{text.TXT_CONTENT_RECOMMEND}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
