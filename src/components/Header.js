import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./styles/Header.css";

export default class Header extends Component {

  componentDidMount() {
    $(document).ready(function() {
      $('#menu_on').click(function () { 
        $('body').toggleClass('visible_menu'); 
      })
    });
  }
  
  render() {
    return (

      <div className="container-fluid container__color">
        <div className="row header">

          <div className="col-6">
            <Link className="titulo__font" to="/recarga"> ADN Detector</Link>
          </div>
          <div className="col-6 header__derecha">
            <div id="wrapper">
              <header id="#header">
                <Link to="#" id="menu_on">
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </header>
              <nav>
                <ul>
                  <li> <Link to="/">Cerrar Sesion</Link> </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
