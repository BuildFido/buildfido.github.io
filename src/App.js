import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SafeHarborInfo from "./components/SafeHarbourInfo";
import './App.css';
import LoadingComponent from "./components/Loading";
import ResponseCard from "./components/ResponseCard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <LoadingComponent/>
        <SafeHarborInfo/>
      </Fragment>
    );
  }
}

export default App;