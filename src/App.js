import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Display from "./components/Display";

const APPID = "d06dac9eb6f0c0a48f957381623c866c";
export class App extends Component {
  state = {
    searchQuery: "",
    cityName: "",

    weather: {}
  };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.searchQuery
        }&appid=${APPID}`
      )
      .then(res => {
        if (res && res.data) {
          this.setState({
            searchQuery: "",
            cityName: res.data.name,

            weather: res.data.main
          });

          console.clear();

          console.log(this.state);
        }
      })
      .catch(() => {
        alert("Search query is invalid. Please enter again");
        this.setState({
          searchQuery: ""
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit" value="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <Display cityName={this.state.cityName} weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
