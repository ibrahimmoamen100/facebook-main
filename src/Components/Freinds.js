import React, { Component } from "react";
import axios from "axios";

import "./Freinds.css";

export default class Freinds extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //   this.setState({
    //     data: response.data,
    //   });
    // });
  }
  render() {
    return (
      <div className="freinds_part">
        <h1>this Freinds Section</h1>
        <div></div>
      </div>
    );
  }
}
