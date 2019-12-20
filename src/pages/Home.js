import React, { Component } from "react";
import Header from "../components/Header";
import PageLoading from "../components/PageLoading";
import Navbar from "../components/Navbar";
import ItemList from "../components/ItemList";
import "./styles/Home.css";

const axios = require("axios").default;

export default class Home extends Component {
  
  constructor() {
    super()
    this.state = {
      loading: false,
      error: null,
      data: [
        {}
      ]
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    let data;
    try {
      await axios
        .get("http://adnbwl.us-east-2.elasticbeanstalk.com/mutation/all")
        .then(function(response) {
          data = response.data;
        });
      this.setState({ data: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchDataN = async () => {
    this.setState({ loading: true, error: null });
    let data;
    try {
      await axios
        .get("http://adnbwl.us-east-2.elasticbeanstalk.com/mutation/sinmutation")
        .then(function(response) {
          data = response.data;
        });
      this.setState({ data: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchDataM = async () => {
    this.setState({ loading: true, error: null });
    let data;
    try {
      await axios
        .get("http://adnbwl.us-east-2.elasticbeanstalk.com/mutation/conmutation")
        .then(function(response) {
          data = response.data;
          console.log(data);
        });
      this.setState({ data: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleClickN = e => {
    
  };

  handleClickM = e => {
    console.log('CON MUTATION')
    this.fetchDataM()
  };

  handleClickSM = e => {
    console.log('SIN MUTACION');
    this.fetchDataN()
  };

  handleClickE = e => {
    console.log('Nuevo');
  };

  render() {

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
          <Header/>   
          <Navbar/>     
      </React.Fragment>
    );
  }
}
