import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background }} className="color-box">
        <CopyToClipboard text={background}>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
        </CopyToClipboard>
        <span className="see-more">More</span>
      </div>
    );
  }
}
export default ColorBox;
