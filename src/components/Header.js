import React, { Component } from "react";

import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (

      <div className="container-fluid container__color">
        <div className="row header">

          <div className="col-6">
            <h1 className="titulo__font"> ADN Detector</h1>
          </div>
          <div className="col-6 header__derecha">
            <p>menu</p>
          </div>
        </div>
      </div>

    );
  }
}
