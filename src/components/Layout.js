import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Layout(props) {
  return (
    <React.Fragment>
        <Header/>   
        <Navbar/>  
        {props.children}
    </React.Fragment>
  );
}

export default Layout;