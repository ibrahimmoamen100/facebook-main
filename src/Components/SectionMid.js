import React, { Component } from "react";
import CreateComment from "./Sections/CreateComment";
import "./SectionMid.css";

export default class SectionMid extends Component {
  render() {
    return (
      <div className="container-mid">
        <CreateComment />
      </div>
    );
  }
}
