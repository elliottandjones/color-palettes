import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="palette">
        {/* Navbar */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
