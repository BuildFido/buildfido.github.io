import React, { Component } from "react";
import Upload from "./Upload";

class Header extends Component {
  render() {
    return (
      <>
        <h1 className="title text-primary">FIDO</h1>
        <div id="header" className="upload-header text-primary">
          <h1>De-identify your PHI Data</h1>
          <Upload/>
        </div>
      </>
    );
  }
}

export default Header;
