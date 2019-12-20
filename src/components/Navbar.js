import React, { Component } from "react";

import "./styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="container-fluid">
          <div className="row navbar__color">

            <div className="col-md-6 col-lg-3 button__position">
              <button> Humano </button>
            </div>
            <div className="col-md-6 col-lg-3 button__position">
              <button> Estado </button>
            </div>
            <div className="col-md-6 col-lg-3 button__position">
              <button> Mutaciones </button>
            </div>
            <div className="col-md-6 col-lg-3 button__position">
              <button> Sin Mutaciones </button>
            </div>
          </div>
        </div>

        <div className="redondeado"></div>

        

      </React.Fragment>
    );
  }
}